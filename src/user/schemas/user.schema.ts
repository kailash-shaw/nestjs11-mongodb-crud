import { Schema, Document } from 'mongoose';

export type UserDocument = User & Document;

export class User {
  name: string;
  email: string;
}

export const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true }
});
