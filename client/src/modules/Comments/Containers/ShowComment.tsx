import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { css } from "aphrodite/no-important"
import baseStyle from "../../../styles"
import { authorQuery } from "./queries"
import { Avatar, Loading } from "../../../Components"
import { Comment } from "../Components/Comment"

type MyShowCommentProps = {
  _id: string
  date: string
  text: string
  idComment: string | undefined
  comments: any[]
  postId: string
}

export const ShowComment: React.FC<MyShowCommentProps> = ({ _id, date, text, idComment, comments, postId }): any => {
  const { loading, error, data } = useQuery(authorQuery, {
    variables: { _id }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { author } = data
  return <section className={ css(baseStyle.flexVFS) }>
    <Avatar avatar={ author.avatar } name={ author.name } />
    <Comment name={ author.name } date={ date } text={ text } idComment={ idComment } comments={ comments } postId={ postId } />
  </section>
}