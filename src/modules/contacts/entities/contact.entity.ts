import { randomUUID } from 'crypto';

export class Contact {
  readonly id: string;
  name: string;
  email: string;
  phone: string;
  created_at: Date;
  client_id?: string;

  constructor() {
    this.id = randomUUID();
    this.created_at = new Date();
  }
}
