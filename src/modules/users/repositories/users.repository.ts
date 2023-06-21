import { Ad } from 'src/modules/ads/entities/ad.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/User.entity';
import { ResetTokenDto } from '../dto/reset-token.dto';

export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User> | User;
  abstract findAll(): Promise<User[]> | User[];
  abstract findOne(id: string): Promise<User> | User;
  abstract findByEmail(email: string): Promise<User> | User;
  abstract findByToken(token: string): Promise<User> | User;
  abstract findAds(id: string): Promise<Ad[]> | Ad[]
  abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
  abstract delete(id: string): Promise<void> | void;
  abstract updateToken(email: string, resetToken: string): Promise<void> | void;
  abstract updatePassword(email: string, resetToken: string): Promise<void> | void;
}
