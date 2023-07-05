import { randomUUID } from 'crypto';

export class Sold {
  readonly id: string;
  ad_id: string;
  user_id: string;
  created_at: Date;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
