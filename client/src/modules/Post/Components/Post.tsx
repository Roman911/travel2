import React from 'react';
import { css } from 'aphrodite/no-important';
import baseStyles from '../../../styles';
import styles from './postStyles';
import { InfoBar, ArticleStats, AddedComment, SectionTitle, AuthorPost } from "../../../Components";
import { Likes } from '../../';

import { PostData } from '../../../types/post';
type MyPostProps = {
  post: PostData
}

export const Post:React.FC<MyPostProps> = ({ post }) => {
  const { id, title, small_text, text, coverPost, views, likes, author, date, coordinates, tickets, location, work_time, isType } = post;
  return <section className={css(baseStyles.wrapper)}>
    <SectionTitle title="Стаття"/>
    <div className={css(baseStyles.flexVFS, styles.wrapperL)}>
      <div className={css(styles.wrapper, baseStyles.boxShadow)}>
        <AuthorPost isArticle={true} author={author} date={date}/>
        <h2 className={css(styles.title)}>{title}</h2>
        <p className={css(styles.text)}>{small_text}</p>
        <img className={css(styles.img)} src={ coverPost } alt=""/>
        <p className={css(styles.text)}>{text}</p>
        <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
          <ArticleStats isArticle={true} views={views}/>
          <Likes id={id} likes={likes} post={ true } />
        </div>
        <h3>Comments:</h3>
        <AddedComment/>
      </div>
      <InfoBar coordinates={ coordinates } tickets={ tickets } location={ location } work_time={ work_time } isType={ isType } />
    </div>
  </section>
};