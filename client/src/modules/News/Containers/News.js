import React from "react";
import { css } from 'aphrodite/no-important';
import { useQuery } from '@apollo/react-hooks';

import { postsQuery } from './queries';
import styles from './newsStyles';
import { Loading } from "../../../Components/Loading/Loading";
import { New } from '../Components/New';

const News = () => {

  const { loading, error, data } = useQuery(postsQuery);

  if (loading) return <Loading />;
  if (error) return `Error! ${error}`;

  const { posts } = data;

  const news = posts.map((item, index) => {
    return <New
      key={ index }
      id={item._id}
      title={item.title}
      idAuthor={item.idAuthor}
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