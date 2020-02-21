import React from 'react';
import { Link } from "react-router-dom";

import img from '../../../assets/file.jpg';

import { css } from 'aphrodite/no-important';
import baseStyles from '../../../styles/index';
import styles from './newsStyles';

import { ArticleStats, AuthorPost } from "../../../Components";

export const New = ({ id, title, small_text,  date, cover, views, author }) => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Link to={`/post/${ id }`}>
        <img className={ css(styles.img) } src={ cover } alt=""/>
      </Link>
      <div className={ css(styles.block) }>
        <AuthorPost isArticle={ false } author={author} data={ date } />
        <Link to={`/post/${ id }`} >
        <div className={ css(baseStyles.block) }>
          <h3>{ title }</h3>
          <p>{ small_text }</p>
        </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <ArticleStats isArticle={ false } views={ views } />
    </div>
  </div>
};