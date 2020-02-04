import React from 'react';
import { css } from "aphrodite/no-important";

import baseStyles from "../../styles";
import styles from "./AvatarStyles";

export const Avatar = ({ avatar, name }) => {

  const avatarBG = () => {
    if (avatar) {
      const background = avatar !== 'undefined' ? { background: `url(${ avatar })`,backgroundSize: 'cover' } : { background: '#4196e0' };
      const letter = avatar === 'undefined' ? name[0].toUpperCase() : '' ;

      return { background, letter }
    }
  };

  return <>
    <div style={ avatarBG().background } className={ css(baseStyles.imgAv, baseStyles.flex, styles.background) }>
      { avatarBG().letter }
    </div>
  </>
};