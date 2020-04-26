export type PostData = {
  _id: string
  title: string
  small_text: string
  text: string
  coverPost: string
  views: number
  likes: Array<string>
  author: { avatar: string; name: string; }
  createdAt: string
  coordinates: string
  tickets: string[]
  location: string
  work_time: string
  isType: string
  editor: string
}