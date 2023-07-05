import { Module } from '@nestjs/common';
import { SoldsService } from './solds.service';
import { SoldsController } from './solds.controller';
import { PrismaService } from 'src/database/prisma.service';
import { SoldsRepository } from './repositories/solds.respository';
import { SoldsPrismaRepository } from './repositories/prisma/solds-prisma.repository';

@Module({
  controllers: [SoldsController],
  providers: [
    SoldsService,
    PrismaService,
    {
      provide: SoldsRepository,
      useClass: SoldsPrismaRepository,
    },
  ],
})
export class SoldsModule {}
