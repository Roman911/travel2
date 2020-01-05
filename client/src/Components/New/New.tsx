import React from 'react';

import img from '../../assets/file.jpg';

import { css } from 'aphrodite/no-important';
import baseStyles from '../../styles/index';
import styles from './newsStyles';

import { UserName, ArticleStats } from "../index";

export const New:React.FC = () => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <img className={ css(styles.img) } src={ img } alt=""/>
      <div className={ css(styles.block) }>
        <UserName isArticle={ false } />
        <div className={ css(baseStyles.block) }>
          <h3>Winter escapes</h3>
          <p>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading. Welcome to your </p>
        </div>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <ArticleStats isArticle={ false } />
    </div>
  </div>
};