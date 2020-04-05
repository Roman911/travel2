export type CreatePostProps = {
  handleSubmit: () => void
  values: () => void
  touched: (id: string) => void
  handleChange: () => void
  handleBlur: () => void
  isSubmitting: () => void
}

export type PostData = {
  id: string
  title: string
  small_text: string
  text: string
  coverPost: string
  views: number
  likes: []
  author: { avatar: string; name: string; }
  date: string
  coordinates: string
  tickets: string[]
  location: string
  work_time: string
  isType: string
}