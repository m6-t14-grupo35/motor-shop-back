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
  image: string;

  zip_code: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;

  Ad?: Ad[];
  readonly created_at: Date;

  @Exclude()
  password: string;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
