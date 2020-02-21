import mongoose, { Schema, Document } from 'mongoose';
// @ts-ignore
import { isEmail } from 'validator';

export interface IUser extends Document{
  idAuthor: string,
  email: string,
  avatar: string,
  name: string,
  lastName: string,
  password: string,
  confirmed: boolean,
  confirm_hash: string,
  last_seen: Date,
  createdEvents: any,
}

const UserSchema = new Schema({
  idAuthor: String,
  email: {
    type: String,
    required: 'Email address is required',
    validate: [isEmail, "Invalid email"],
    unique: true
  },
  avatar: String,
  name: String,
  lastName: String,
  password: {
    type: String,
    required: 'Password is required'
  },
  confirmed: Boolean,
  confirm_hash: String,
  last_seen: {
    type: Date,
    default: new Date
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event'
    }
  ]
}, {
  timestamps: true
});

module.exports = mongoose.model<IUser>('User', UserSchema);