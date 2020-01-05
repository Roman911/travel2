import React from 'react';

import img from '../../../assets/file.jpg';

import { css } from 'aphrodite/no-important';
import baseStyles from '../../../styles/index';
import styles from './newsStyles';

import { UserName, ArticleStats } from "../../../Components";

export const New = ({ title, body }) => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <img className={ css(styles.img) } src={ img } alt=""/>
      <div className={ css(styles.block) }>
        <UserName isArticle={ false } />
        <div className={ css(baseStyles.block) }>
          <h3>{ title }</h3>
          <p>{ body }</p>
        </div>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <ArticleStats isArticle={ false } />
    </div>
  </div>
};