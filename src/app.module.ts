import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DepartmentsModule } from './departments/departments.module';
import { DepartmentsService } from './departments/departments.service';
import { DirectusService } from './directus/directus.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Делаем ConfigModule глобальным
    }),
    // In-memory кеш с TTL 15 минут
    CacheModule.register({
      isGlobal: true, // Делаем глобальным для использования во всем приложении
      ttl: 15 * 60 * 1000, // 15 минут в миллисекундах
      max: 1000, // Максимальное количество элементов в кеше
    }),
    DepartmentsModule,
  ],
  providers: [DepartmentsService, DirectusService, PrismaService],
})
export class AppModule {}
