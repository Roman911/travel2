import mongoose, {Schema, Document} from 'mongoose';

// @ts-ignore

export interface IPost extends Document {
  idAuthor: string,
  type_material: string,
  title: string,
  coverNews: string,
  coverPost: string,
  link: string,
  tags: object,
  tickets: object,
  small_text: string,
  coordinates: object,
  photo: string,
  text: string,
  views: number,
  likes: object,
  confirmed: boolean,
  confirm_hash: string,
  last_seen: Date,
}

const PostSchema = new Schema({
  idAuthor: String,
  type_material: String,
  title: String,
  coverNews: String,
  coverPost: String,
  link: String,
  tags: Array,
  tickets: Array,
  small_text: String,
  coordinates: Array,
  photo: String,
  text: String,
  views: Number,
  likes: Array,
  confirmed: Boolean,
  confirm_hash: String,
  last_seen: {
    type: Date,
    default: new Date
  },
}, {
  timestamps: true
});

module.exports = mongoose.model<IPost>('Post', PostSchema);