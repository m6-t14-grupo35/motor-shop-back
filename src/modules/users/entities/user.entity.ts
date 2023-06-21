import { randomUUID } from 'crypto';
import { Exclude } from 'class-transformer';
import { Ad } from 'src/modules/ads/entities/ad.entity';

export class User {
  readonly id: string;
  name: string;
  email: string;
  phone_number: string;
  birthdate: string | Date;
  description: string;
  is_seller: boolean;
  cpf: string;
  Ad?: Ad[]
  readonly createdAt: Date;
  //updated_at: Date
  //deleted_at: Date

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
    //this.updated_at = null
    //this.deleted_at = null
  }
}
