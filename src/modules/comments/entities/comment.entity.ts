import { randomUUID } from 'crypto';
import { User } from 'src/modules/users/entities/User.entity';

export class Comment {
  readonly id: string;
  text: string;
  user_id: string;
  User: User;
  name: string;
  ad_id: string;
  created_at: Date;
  updated_at: Date;
  //deleted_at: Date

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
    this.name = this.User.name
    //this.updated_at = null
    //this.deleted_at = null}
  }
}
