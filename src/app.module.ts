import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdsModule } from './modules/ads/ads.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ImagesModule } from './modules/images/images.module';
import { AddressesModule } from './modules/addresses/addresses.module';
import { CommentsModule } from './modules/comments/comments.module';
import { SoldsModule } from './modules/solds/solds.module';

@Module({
  imports: [AdsModule, UsersModule, AuthModule, ImagesModule, /* AddressesModule, */ CommentsModule, SoldsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
