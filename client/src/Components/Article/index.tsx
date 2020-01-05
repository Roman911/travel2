import React from 'react';
import { css } from 'aphrodite/no-important';

import baseStyles from './../../styles/index';
import styles from './articleStyles';

import { article } from '../../article';

import { UserName, InfoBar, ArticleStats, AddedComment } from "../index";

export const Article:React.FC = () => {
  return <div className={ css(baseStyles.wrapper, baseStyles.flexVFS, styles.wrapperL) }>
    <div className={ css(styles.wrapper) }>
      <UserName isArticle={ true } />
      <h2 className={ css(styles.title) }>{ article.tittle }</h2>
      <p className={ css(styles.text) }>{ article.subTittle }</p>
      <img src={ article.img } alt=""/>
      <p className={ css(styles.text) }>{ article.text }</p>
      <ArticleStats isArticle={ true } />
      <h3>Comments:</h3>
      <AddedComment />
    </div>
    <InfoBar />
  </div>
};