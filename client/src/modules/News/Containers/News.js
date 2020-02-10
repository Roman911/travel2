import React from "react";
import { css } from 'aphrodite/no-important';
import { Query } from "react-apollo";

import { postsQuery } from './queries';
import styles from './newsStyles';
import { Loading } from "../../../Components/Loading/Loading";
import { New } from '../Components/New';

const News = () => {

  return <div className={ css(styles.news) }>
    <Query query={ postsQuery } >
      {({ loading, error, data }) => {
        if (loading) return <Loading />;
        if (error) return `Error! ${error.message}`;
        const { posts } = data;
        return <div className={ css(styles.news) }>
          {
            posts.map((item, index) => {
              return <New
                key={ index }
                id={item.id}
                title={item.title}
                idAuthor={item.idAuthor}
                date={item.createdAt}
                small_text={item.small_text}
                cover={item.cover}
                views={ item.views }
                user={ item.user }
              />
          })
          }
        </div>
      }}
    </Query>
  </div>
};

export default News