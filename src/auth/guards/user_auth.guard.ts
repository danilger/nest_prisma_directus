import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

/** Проверяет access_token на валидность */
@Injectable()
export class UserAuthGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const token = request.cookies?.['access_token'];

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    const secret = this.configService.get<string>('DIRECTUS_SECRET');
    if (!secret) {
      throw new UnauthorizedException('DIRECTUS_SECRET not configured');
    }

    try {
      const decoded = jwt.verify(token, secret);
      request.user = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
