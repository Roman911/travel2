export type Item = {
  _id: string
  title: string
  idAuthor: string
  createdAt: string
  small_text: string
  coverNews: string
  views: number
  likes: []
  author: { avatar: string; name: string; }
}