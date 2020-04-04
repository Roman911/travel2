import React from "react";
import { css } from 'aphrodite/no-important';
import { useQuery } from '@apollo/react-hooks';

import { postsQuery } from './queries';
import styles from './newsStyles';
import { Loading } from "../../../Components";
import { New } from '../Components/New';

type item = {
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

// @ts-ignore
const News: React.FC = () => {
  const { loading, error, data } = useQuery(postsQuery);
  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;
  const { posts } = data;
  const news = posts.map((item: item, index: number) => {
    return <New
      key={ index }
      id={item._id}
      title={item.title}
      date={item.createdAt}
      small_text={item.small_text}
      cover={item.coverNews}
      views={ item.views }
      likes={ item.likes }
      author={ item.author }
    />
  });

  return <div className={ css(styles.news) }>
    { news }
  </div>
};

export default News