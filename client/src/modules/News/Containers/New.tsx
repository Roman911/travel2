import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { ShowNew } from '../Components/ShowNew'
import { commentsQuery } from "./queries"
import { Loading } from "../../../Components"

import { Item } from '../../../types/news'

type MyNewProps = {
  item: Item
}

export const New: React.FC<MyNewProps> = ({ item }): any => {
  const { loading, error, data } = useQuery( commentsQuery, {
    variables: { postId: item._id }
  })
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { comments } = data
  return <ShowNew item={ item } comments={ comments } />
}