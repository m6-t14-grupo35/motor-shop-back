import { randomUUID } from 'crypto';

export class Comment {
  readonly id: string;
  text: string;
  user_id: string;
  ad_id: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
