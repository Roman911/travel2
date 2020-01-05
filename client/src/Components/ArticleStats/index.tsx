import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye, faCommentAlt } from "@fortawesome/free-regular-svg-icons";

import { css } from 'aphrodite/no-important';
import baseStyles from './../../styles/index';
import styles from './articleStatsStyles';

interface ArticleStatsProps {
  isArticle:boolean
}

export const ArticleStats:React.FC<ArticleStatsProps> = ({ isArticle }) => {
  return <div className={css(baseStyles.flexSB, baseStyles.block, styles.bottom)}>
    <div className={css(baseStyles.flex)}>
      <span className={css(baseStyles.views)}>
        0 views
        <FontAwesomeIcon className={css(baseStyles.iconS)} icon={faEye}/>
      </span>
      { !isArticle
        ?
        <span className={css(baseStyles.comment)}>
          Write a comment
          <FontAwesomeIcon className={css(baseStyles.iconS)} icon={faCommentAlt}/>
        </span>
        :
        ''
      }
    </div>
    <FontAwesomeIcon className={css(baseStyles.icon)} icon={faHeart}/>
  </div>
};