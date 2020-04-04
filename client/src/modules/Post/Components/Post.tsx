import React from 'react';
import { css } from 'aphrodite/no-important';
import baseStyles from '../../../styles';
import styles from './postStyles';
import { InfoBar, ArticleStats, AddedComment, SectionTitle, AuthorPost } from "../../../Components";
import { Likes } from '../../';

type MyPostProps = {
  id: string
  title: string
  small_text: string
  text: string
  cover: string
  views: number
  likes: []
  author: { avatar: string; name: string; }
  date: string
  coordinates: string
}

export const Post:React.FC<MyPostProps> = ({ id, title, small_text, text, cover, views, likes, author, date, coordinates }) => {
  return <section className={css(baseStyles.wrapper)}>
    <SectionTitle title="Стаття"/>
    <div className={css(baseStyles.flexVFS, styles.wrapperL)}>
      <div className={css(styles.wrapper, baseStyles.boxShadow)}>
        <AuthorPost isArticle={true} author={author} date={date}/>
        <h2 className={css(styles.title)}>{title}</h2>
        <p className={css(styles.text)}>{small_text}</p>
        <img className={css(styles.img)} src={cover} alt=""/>
        <p className={css(styles.text)}>{text}</p>
        <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
          <ArticleStats isArticle={true} views={views}/>
          <Likes id={id} likes={likes} post={ true } />
        </div>
        <h3>Comments:</h3>
        <AddedComment/>
      </div>
      <InfoBar coordinates={ coordinates }/>
    </div>
  </section>
};