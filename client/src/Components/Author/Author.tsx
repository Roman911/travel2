import React from 'react'
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudsmith } from "@fortawesome/free-brands-svg-icons"
import { Avatar, Date, NameUser } from "../"
import baseStyles from "../../styles/"
import styles from "./authorStyles"

type MyAuthorPostProps = {
  isArticle: boolean
  author: { avatar: string, name: string }
  date: string
}

export const AuthorPost: React.FC<MyAuthorPostProps> = ({ isArticle, author, date }) => {
  const { avatar, name } = author;
  return <div className={css(baseStyles.flexSB, baseStyles.block)}>
    <div className={css(baseStyles.flex)}>
      <Avatar avatar={ avatar } name={ name } />
      <div className={css(!isArticle ? styles.blockName : styles.isArticle)}>
        <NameUser name={ name } />
        { isArticle && <div className={ css(styles.separator) } /> }
        <Date date={ date } format='LL'/>
      </div>
    </div>
    <FontAwesomeIcon className={css(baseStyles.icon)} icon={faCloudsmith}/>
  </div>
};