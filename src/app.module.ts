import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdsModule } from './modules/ads/ads.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [AdsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
