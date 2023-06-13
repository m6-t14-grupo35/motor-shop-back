import { Module } from '@nestjs/common';
import { AdsService } from './ads.service';
import { AdsController } from './ads.controller';
import { PrismaService } from 'src/database/prisma.service';
import { AdsRepository } from './repositories/ads.repository';
import { AdsPrismaRepository } from './repositories/prisma/ads-prisma.repository';
import { AdsInMemoryRepository } from './repositories/in-memory/ads.in-memory.repository';

@Module({
  controllers: [AdsController],
  providers: [AdsService, PrismaService, {
    provide: AdsRepository,
    useClass: AdsPrismaRepository
  }]
})
export class AdsModule {}
