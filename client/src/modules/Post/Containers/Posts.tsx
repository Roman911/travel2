import React from "react"
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { postQuery } from './queries'
import { Post } from "../Components/Post"
import { Loading } from "../../../Components"
import { User } from '../../../types/user'

type PostsProps = {
  user: User
}
type RouteParams = {
  id: string
}

const Posts: React.FC<PostsProps> = ({ user }): any => {
  const _id: string = useParams<RouteParams>().id
  const { loading, error, data } = useQuery(postQuery, {
    variables: { _id }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { post } = data

  return <Post user={ user } post={ post } />
};

export default Posts