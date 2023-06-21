import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdsModule } from './modules/ads/ads.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ImagesModule } from './modules/images/images.module';

@Module({
  imports: [AdsModule, UsersModule, AuthModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
