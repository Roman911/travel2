import mongoose, {Schema, Document} from 'mongoose';

// @ts-ignore

export interface IPost extends Document {
  idAuthor: string,
  type_material: string,
  title: string,
  cover: string,
  link: string,
  tags: object,
  price: string,
  small_text: string,
  coordinates: object,
  photo: string,
  text: string,
  views: number,
  confirmed: boolean,
  confirm_hash: string,
  last_seen: Date,
}

const PostSchema = new Schema({
  idAuthor: String,
  type_material: String,
  title: String,
  cover: String,
  link: String,
  tags: Array,
  price: String,
  small_text: String,
  coordinates: Array,
  photo: String,
  text: String,
  views: Number,
  confirmed: Boolean,
  confirm_hash: String,
  last_seen: {
    type: Date,
    default: new Date
  },
}, {
  timestamps: true
});

const PostModel = mongoose.model<IPost>('Post', PostSchema);

export default PostModel