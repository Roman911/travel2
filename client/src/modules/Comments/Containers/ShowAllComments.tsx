import React from "react"
import { ShowComment } from "./ShowComment"

type MyShowCommentsProps = {
  comments: any[]
  postId: string
}

export const ShowAllComments: React.FC<MyShowCommentsProps> = ({ comments, postId }): any => {
  const comment = comments.reverse().map((item, index) => {
    return <ShowComment key={ index } _id={ item.idAuthor } date={ item.createdAt } text={ item.text } idComment={ item._id } comments={ item.comments } postId={ postId } />
  })
  return <section>
    { comments.length !== 0 ? comment : <h4>Коментарів поки що нема</h4> }
  </section>
}