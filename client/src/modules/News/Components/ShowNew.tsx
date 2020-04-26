import React from 'react'
import { Link } from "react-router-dom"
import img from '../../../assets/file.jpg'
import { css } from 'aphrodite/no-important'
import baseStyles from '../../../styles'
import styles from './newsStyles'
import { ArticleStats, AuthorPost } from "../../../Components"
import { Likes } from '../../'

import { Item } from '../../../types/news'

type MyNewProps = {
  item: Item,
  comments: string[]
}

export const ShowNew:React.FC<MyNewProps> = ({ item, comments }) => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.content) }>
      <Link to={`/post/${ item._id }`}>
        <img className={ css(styles.img) } src={ item.coverNews } alt=""/>
      </Link>
      <div className={ css(styles.block) }>
        <AuthorPost isArticle={ false } author={ item.author } date={ item.createdAt } />
        <Link to={`/post/${ item._id }`} >
        <div className={ css(baseStyles.block) }>
          <h3>{ item.title }</h3>
          <p>{ item.small_text }</p>
        </div>
        </Link>
      </div>
    </div>
    <div className={ css(styles.block) }>
      <div className={css(baseStyles.flexSB, baseStyles.block, baseStyles.bottom)}>
        <ArticleStats isArticle={ false } views={ item.views } comments={ comments } />
        <Likes likes={ item.likes } id={ item._id } post={ false } />
      </div>
    </div>
  </div>
};