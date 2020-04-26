import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { CreateComment } from "../../"
import { ShowAllComments } from "./ShowAllComments"
import { commentsQuery } from "./queries"
import { Loading } from "../../../Components"

type MyCommentsProps = {
  id: string
}

const Comments: React.FC<MyCommentsProps> = ({ id }): any => {
  const { loading, error, data } = useQuery( commentsQuery, {
    variables: { postId: id }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { comments } = data
  return <section>
    <h3>КОМЕНТАРІ</h3>
    <CreateComment postId={ id } isFirstComment={ true } />
    <ShowAllComments comments={ comments } postId={ id } />
  </section>
}

export default Comments