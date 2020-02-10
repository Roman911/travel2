import React from 'react';
import { css } from "aphrodite/no-important";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudsmith } from "@fortawesome/free-brands-svg-icons";
import { faCrown } from "@fortawesome/free-solid-svg-icons";

import { Avatar, Date } from "./../index";
import baseStyles from "../../styles/";
import styles from "./authorStyles";

export const AuthorPost = ({ isArticle, user, date }) => {

  const { avatar, name } = user;

  return <div className={css(baseStyles.flexSB, baseStyles.block)}>
    <div className={css(baseStyles.flex)}>
      <Avatar avatar={ avatar } name={ name } />
      <div className={css(!isArticle ? styles.blockName : styles.isArticle)}>
        <div className={css(baseStyles.flex)}>
          {name !== 'Admin' ?
            <span className={css(styles.name)}>{ name }</span> :
            <span className={css(baseStyles.flex)}>
              <span className={css(styles.name)}>{ name }</span>
              <FontAwesomeIcon className={css(styles.crown)} icon={faCrown}/>
            </span>
          }
        </div>
        { isArticle ? <div className={ css(styles.separator) } /> : '' }
        <Date date={ date } format='LL'/>
      </div>
    </div>
    <FontAwesomeIcon className={css(baseStyles.icon)} icon={faCloudsmith}/>
  </div>
};