import React from "react";
import { css } from 'aphrodite/no-important';

import styles from './newsStyles';

import { New } from '../Components/New';
import { Loading } from "../../../Components/Loading/Loading";

import withHocs from './NewsTableHoc';

const News = (props) => {

  const data = props.data;
  const { posts = [] } = data;

  const article = !posts ? <Loading /> : posts.map((item, index) => {
    return <New
      key={ index }
      id={item.id}
      title={item.title}
      idAuthor={item.idAuthor}
      date={item.last_seen}
      small_text={item.small_text}
      cover={item.cover}
      views={ item.views }
      user={ item.user }
    />
  });

  return <div className={ css(styles.news) }>
    { article }
  </div>
};

export default withHocs(News)