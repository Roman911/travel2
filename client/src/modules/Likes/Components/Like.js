import React from "react";
import { css } from "aphrodite/no-important";
import { faThumbsUp as faThumbsRegular } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as faThumbsSolid } from "@fortawesome/free-solid-svg-icons";

import { LikeIcon } from './LikeIcon';

import baseStyles from '../../../styles/';
import styles from './LikeStyles';

export const Like = ({ post, quantityLikes, userLike, handleChangeAdd, handleChangeRemove }) => {

  const likeNumber = quantityLikes !== 0 ? <p className={ css(styles.text) }>{ quantityLikes }</p> : '';

  const className = userLike.length !== 0 ? post ?
    css(baseStyles.icon, styles.icon, styles.iconActive, styles.iconPost) :
    css(baseStyles.icon, styles.icon, styles.iconActive) :
    post ?
    css(baseStyles.icon, styles.icon, styles.iconPost) :
    css(baseStyles.icon, styles.icon);
  const handleChange = post ? userLike.length !== 0 ? handleChangeRemove : handleChangeAdd : () => {};
  const iconThumbs = userLike.length !== 0 ? faThumbsSolid : faThumbsRegular;

  const likeActive = <LikeIcon className={ className } handleChange={ handleChange } iconThumbs={ iconThumbs } />;

  return <div className={ css(baseStyles.flex) }>
    { likeActive }
    { likeNumber }
  </div>
};