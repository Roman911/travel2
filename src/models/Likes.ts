import mongoose, { Schema, Document } from 'mongoose';

export interface ILikes extends Document {
  userId: object,
  postId: string,
}

const LikesSchema = new Schema({
  userId: Array,
  postId: String,
}, {
  timestamps: true
});

module.exports = mongoose.model<ILikes>('Likes', LikesSchema);