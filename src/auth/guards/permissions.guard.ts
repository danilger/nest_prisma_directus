import { CACHE_MANAGER } from '@nestjs/cache-manager';
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Cache } from 'cache-manager';
import { DirectusService } from 'src/directus/directus.service';
import {
  directus_accessModel,
  directus_accessWhereInput,
  directus_permissionsModel,
  directus_permissionsWhereInput,
  directus_usersModel,
} from 'src/generated/prisma/models';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

/**
 * Гвард для проверки разрешений пользователя на основе системы Directus
 *
 * Проверяет доступ пользователя к определенным действиям (read, create, update, delete)
 * на основе его роли и связанных политик через таблицу access.
 *
 * Алгоритм работы:
 * 1. Получает требуемые разрешения из декоратора @Permissions()
 * 2. Находит доступы пользователя по user_id и role_id
 * 3. Ищет разрешения, которые соответствуют требуемым действиям и коллекциям
 * 4. Возвращает результат в зависимости от оператора ('or' или 'and')
 *
 * Режимы проверки:
 * - 'or': пользователь должен иметь хотя бы одно из разрешений
 * - 'and': пользователь должен иметь все указанные разрешения
 *
 * Примечание:
 * - Использует встроенный in-memory кеш NestJS (@nestjs/cache-manager)
 * - TTL кеша: 15 минут (настраивается в AppModule)
 * - При изменении прав пользователя кеш автоматически обновится через TTL
 *
 * @important Должен использоваться совместно с декоратором @Permissions()
 * @requires UserAuthGuard для получения информации о пользователе
 *
 * @example
 * ```typescript
 * @Controller('users')
 * @UseGuards(UserAuthGuard, PermissionsGuard)
 * export class UsersController {
 *   @Get()
 *   @Permissions(['read users'])
 *   findAll() { ... }
 *
 *   @Post()
 *   @Permissions(['create users'], 'and')
 *   create() { ... }
 *
 *   @Put()
 *   @Permissions(['read users', 'update users'], 'and')
 *   update() { ... }
 * }
 * ```
 */
@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private directusService: DirectusService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user: directus_usersModel = request.user;

    if (!user?.id) {
      return false;
    }

    const permissionsRawArray = this.reflector.getAllAndOverride<{
      permissions: string[];
      operator: 'and' | 'or';
    }>(PERMISSIONS_KEY, [context.getHandler(), context.getClass()]);

    // если ручка не закрыта то пропускаем в контроллер
    if (!permissionsRawArray?.permissions) return true;

    const requiredPermissions = permissionsRawArray.permissions
      .map((item) => item.split(' '))
      .map(([action, collection]) => ({ action, collection }));

    const userId = user.id;
    const userRoleId = user.role;

    // Формируем ключ кеша для access
    const accessCacheKey = `access:${userId}:${userRoleId || 'null'}`;

    // Получаем из кеша или БД
    let access = await this.cacheManager.get<directus_accessModel[]>(
      accessCacheKey,
    );

    if (!access) {
      const findAccessWhere: directus_accessWhereInput[] = [
        { user: userId },
        { role: userRoleId },
      ];
      access = await this.directusService.findAccess(findAccessWhere);
      // Сохраняем в кеш с TTL из настроек модуля
      await this.cacheManager.set(accessCacheKey, access);
    }

    if (!access || access.length === 0) {
      return false;
    }

    // Получаем уникальные policy ID из access
    const policyIds = [...new Set(access.map((item) => item.policy))];

    // Формируем условия для поиска разрешений
    const findPermissionsWhere: directus_permissionsWhereInput[] =
      requiredPermissions.map((permission) => ({
        policy: { in: policyIds },
        action: permission.action,
        collection: permission.collection,
      }));

    // Формируем ключ кеша для permissions (сортируем для стабильности)
    const permissionsCacheKey = `permissions:${userId}:${userRoleId || 'null'}:${JSON.stringify(
      findPermissionsWhere.sort((a, b) =>
        `${a.action}-${a.collection}`.localeCompare(`${b.action}-${b.collection}`),
      ),
    )}`;

    // Получаем из кеша или БД
    let permissions = await this.cacheManager.get<directus_permissionsModel[]>(
      permissionsCacheKey,
    );

    if (!permissions) {
      permissions = await this.directusService.findPermissions(
        findPermissionsWhere,
      );
      // Сохраняем в кеш с TTL из настроек модуля
      await this.cacheManager.set(permissionsCacheKey, permissions);
    }

    if (!permissions || permissions.length === 0) {
      return false;
    }

    if (permissionsRawArray.operator === 'or') {
      return permissions.length > 0;
    }

    if (permissionsRawArray.operator === 'and') {
      return requiredPermissions.every((required) =>
        permissions.some(
          (permission) =>
            permission.action === required.action &&
            permission.collection === required.collection,
        ),
      );
    }

    return false;
  }
}
