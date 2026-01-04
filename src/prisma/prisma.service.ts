import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService) {
    const databaseUrl = configService.get<string>('DATABASE_URL');
    if (!databaseUrl) {
      throw new Error('DATABASE_URL не установлена в переменных окружения');
    }
    
    // Создаем Pool напрямую из URL
    const pool = new Pool({
      connectionString: databaseUrl,
    });
    
    const adapter = new PrismaPg(pool);
    super({ adapter });
  }
}