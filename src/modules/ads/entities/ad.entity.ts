import { randomUUID } from 'crypto';

export enum FuelTypes {
  Gasolina,
  Etanol,
  Diesel,
  GLP,
  Hybrid,
  Electric,
}

export class Ad {
  readonly id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  price: number;
  priceFIPE: number;
  description: string;
  is_sold: boolean = false;
  user_id: string;
  user_name: string;
  user_img: string | null;
  user_description: string;
  created_at: Date;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
