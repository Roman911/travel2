import React from 'react';
import { css } from 'aphrodite/no-important';

import baseStyles from '../../../styles';
import styles from './postStyles';

import { InfoBar, ArticleStats, AddedComment } from "../../../Components";
import { Author } from "../../index";

export const Post = ({ idAuthor, title, small_text, text, cover, views }) => {
  return <div className={ css(baseStyles.wrapper, baseStyles.flexVFS, styles.wrapperL) }>
    <div className={ css(styles.wrapper, baseStyles.boxShadow) }>
      <Author isArticle={ true } idAuthor={idAuthor} />
      <h2 className={ css(styles.title) }>{ title }</h2>
      <p className={ css(styles.text) }>{ small_text }</p>
      <img className={ css(styles.img) } src={ cover } alt=""/>
      <p className={ css(styles.text) }>{ text }</p>
      <ArticleStats isArticle={ true } views={ views } />
      <h3>Comments:</h3>
      <AddedComment />
    </div>
    <InfoBar />
  </div>
};