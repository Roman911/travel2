import React from 'react';
import {css} from 'aphrodite/no-important';

import baseStyles from '../../../styles';
import styles from './postStyles';

import {InfoBar, ArticleStats, AddedComment, SectionTitle, AuthorPost} from "../../../Components";

export const Post = ({title, small_text, text, cover, views, user, date}) => {
  return <section className={css(baseStyles.wrapper)}>
    <SectionTitle title="Стаття"/>
    <div className={css(baseStyles.flexVFS, styles.wrapperL)}>
      <div className={css(styles.wrapper, baseStyles.boxShadow)}>
        <AuthorPost isArticle={true} user={user} data={date}/>
        <h2 className={css(styles.title)}>{title}</h2>
        <p className={css(styles.text)}>{small_text}</p>
        <img className={css(styles.img)} src={cover} alt=""/>
        <p className={css(styles.text)}>{text}</p>
        <ArticleStats isArticle={true} views={views}/>
        <h3>Comments:</h3>
        <AddedComment/>
      </div>
      <InfoBar/>
    </div>
  </section>
};