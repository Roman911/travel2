import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { css } from 'aphrodite/no-important';
import baseStyles from '../../styles';

interface ArticleStatsProps {
  isArticle: boolean,
  views: number
}

export const ArticleStats: React.FC<ArticleStatsProps> = ({isArticle, views}) => {
  return <div className={css(baseStyles.flex)}>
      <span className={css(baseStyles.views)}>
        {views === 0 ? '' : views === 1 ? `${views} перегляд` : views === 2 ? `${views} перегляди` : `${views} переглядів`}
        <FontAwesomeIcon className={css(baseStyles.iconS)} icon={faEye}/>
      </span>
    { !isArticle &&
    <span className={css(baseStyles.comment)}>
      Write a comment
      <FontAwesomeIcon className={css(baseStyles.iconS)} icon={faCommentAlt}/>
    </span>
    }
  </div>
};