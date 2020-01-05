import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
  author: {
    type: Schema.Types.ObjectId;
    ref: string;
  },
  title: string,
  text: string,
  img: string,
  last_seen: Date,
}

const ArticleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true
  },
  title: String,
  text: String,
  img: String,
  date: String,
  last_seen: Date,
}, {
  timestamps: true
});

const ArticleModel = mongoose.model<IArticle>('Article', ArticleSchema);

export default ArticleModel