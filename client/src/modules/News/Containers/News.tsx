import React from "react"
import { css } from 'aphrodite/no-important'
import { useQuery } from '@apollo/react-hooks'
import { postsQuery } from './queries'
import styles from './newsStyles'
import { Loading } from "../../../Components"
import { New } from "./New"
import { Item } from '../../../types/news'

const News: React.FC = (): any => {
  const { loading, error, data } = useQuery(postsQuery)
  if (loading) return <Loading />
  if (error) return `Error! ${error}`
  const { posts } = data
  const news = posts.map((item: Item, index: number) => {
    return <New key={ index } item={ item }/>
  });

  return <div className={ css(styles.news) }>
    { news }
  </div>
};

export default News