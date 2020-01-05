import React, { useEffect } from "react";
import { connect } from "react-redux";
import { css } from 'aphrodite/no-important';

import styles from './newsStyles';
import { newsActions } from '../../../redax/actions/index';

import { New } from '../Components/New'
import { Loading } from "../../../Components/Loading/Loading";

const News = ({ items, fetchNews }) => {

  useEffect(() => {
    if (!items.length) {
      fetchNews()
    }
  }, [items, fetchNews]);

  const article = !items ? <Loading /> : items.map((item, index) => {
    return <New key={ index } title={item.title} body={item.body} />
  });

  return <div className={ css(styles.news) }>
    { article }
  </div>
};

export default connect(({ news }) => news, newsActions)(News)