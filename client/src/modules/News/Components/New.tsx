import React from 'react';
import { Link } from "react-router-dom";
import img from '../../../assets/file.jpg';
import { css } from 'aphrodite/no-important';
import baseStyles from '../../../styles';
import styles from './newsStyles';
import { ArticleStats, AuthorPost } from "../../../Components";
import { Likes } from '../../';

type MyNewProps = {
  id: string
  title: string
  small_text: string
  date: string
  cover: string
  views: number
  likes: []
  author: { avatar: string, name: string }
}

export const New:React.FC<MyNewProps> = ({ id, title, small_text,  date, cover, views, likes, author }) => {

  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Link to={`/post/${ id }`}>
        <img className={ css(styles.img) } src={ cover } alt=""/>
      </Link>
      <div className={ css(styles.block) }>
        <AuthorPost isArticle={ false } author={author} date={ date } />
        <Link to={`/post/${ id }`} >
        <div className={ css(baseStyles.block) }>
          <h3>{ title }</h3>
          <p>{ small_text }</p>
        </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
        <ArticleStats isArticle={ false } views={ views } />
        <Likes likes={ likes } id={ id } post={ false } />
      </div>
    </div>
  </div>
};