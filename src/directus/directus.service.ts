import { Injectable } from '@nestjs/common';
import {
  directus_rolesModel,
  directus_permissionsModel,
  directus_permissionsWhereInput,
  directus_accessModel,
  directus_accessWhereInput,
  directus_policiesModel,
} from 'src/generated/prisma/models';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DirectusService {
  constructor(private prisma: PrismaService) {}

  /**
   * Получить все роли Directus
   */
  async getRoles(): Promise<directus_rolesModel[]> {
    return this.prisma.directus_roles.findMany();
  }

  /**
   * Получить роль по ID
   */
  async getRole(id: string): Promise<directus_rolesModel | null> {
    return this.prisma.directus_roles.findUnique({ where: { id } });
  }

  /**
   * Найти разрешения по условию
   */
  async findPermissions(
    where: directus_permissionsWhereInput | directus_permissionsWhereInput[],
  ): Promise<directus_permissionsModel[]> {
    // Преобразуем массив условий в OR, если передан массив
    const whereCondition = Array.isArray(where) ? { OR: where } : where;

    return this.prisma.directus_permissions.findMany({
      where: whereCondition,
    });
  }

  /**
   * Получить разрешения по коллекции
   */
  async getPermissionsByCollection(
    collection: string,
  ): Promise<directus_permissionsModel[]> {
    return this.prisma.directus_permissions.findMany({
      where: { collection },
    });
  }

  /**
   * Получить все записи доступа Directus
   */
  async getAccess(): Promise<directus_accessModel[]> {
    return this.prisma.directus_access.findMany();
  }

  /**
   * Получить доступ по роли
   */
  async getAccessByRole(roleId: string): Promise<directus_accessModel[]> {
    return this.prisma.directus_access.findMany({
      where: { role: roleId },
    });
  }

  /**
   * Получить доступ по пользователю
   */
  async getAccessByUser(userId: string): Promise<directus_accessModel[]> {
    return this.prisma.directus_access.findMany({
      where: { user: userId },
    });
  }

  /**
   * Получить все политики Directus
   */
  async getPolicies(): Promise<directus_policiesModel[]> {
    return this.prisma.directus_policies.findMany();
  }

  /**
   * Найти доступ по условию
   */
  async findAccess(
    where: directus_accessWhereInput | directus_accessWhereInput[],
  ): Promise<directus_accessModel[]> {
    // Преобразуем массив условий в OR, если передан массив
    const whereCondition = Array.isArray(where) ? { OR: where } : where;

    return this.prisma.directus_access.findMany({
      where: whereCondition,
    });
  }

  /**
   * Получить политику по ID
   */
  async getPolicy(id: string): Promise<directus_policiesModel | null> {
    return this.prisma.directus_policies.findUnique({ where: { id } });
  }

  /**
   * Получить политики по имени
   */
  async getPoliciesByName(name: string): Promise<directus_policiesModel[]> {
    return this.prisma.directus_policies.findMany({
      where: { name },
    });
  }

  /**
   * Получить политики по иконке
   */
  async getPoliciesByIcon(icon: string): Promise<directus_policiesModel[]> {
    return this.prisma.directus_policies.findMany({
      where: { icon },
    });
  }

  /**
   * Получить политики с IP доступом
   */
  async getPoliciesWithIpAccess(): Promise<directus_policiesModel[]> {
    return this.prisma.directus_policies.findMany({
      where: {
        AND: [{ ip_access: { not: null } }, { ip_access: { not: '' } }],
      },
    });
  }
}
