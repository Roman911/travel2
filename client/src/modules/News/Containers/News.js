import React, { useEffect } from "react";
import { connect } from "react-redux";
import { css } from 'aphrodite/no-important';

import styles from './newsStyles';
import { newsActions } from '../../../redax/actions/index';

import { New } from '../Components/New';
import { Loading } from "../../../Components/Loading/Loading";

const News = ({ items, fetchNews }) => {

  useEffect(() => {
    if (!items.length) {
      fetchNews()
    }
  }, [items, fetchNews]);

  const article = !items ? <Loading /> : items.map((item, index) => {
    return <New
      key={ index }
      id={item._id}
      title={item.title}
      body={item.body}
      idAuthor={item.idAuthor}
      date={item.createdAt}
      small_text={item.small_text}
      cover={item.cover}
      views={ item.views }
    />
  });

  return <div className={ css(styles.news) }>
    { article }
  </div>
};

export default connect(({ news }) => news, newsActions)(News)