import mongoose, { Schema, Document } from 'mongoose';

export interface IComments extends Document {
  idAuthor: string,
  postId: string,
  text: string,
  comments: [{
    dAuthor: string,
    text: string,
    createdAt: Date,
  }],
  confirmed: boolean,
  confirm_hash: string,
  last_seen: Date,
}

const CommentsSchema = new Schema({
  idAuthor: String,
  postId: String,
  text: String,
  comments: [{
    idAuthor: String,
    text: String,
    createdAt: {
      type: Date,
      default: new Date
    }
  }],
  confirmed: Boolean,
  confirm_hash: String,
  last_seen: {
    type: Date,
    default: new Date
  },
}, {
  timestamps: true
});

module.exports = mongoose.model<IComments>('Comments', CommentsSchema);