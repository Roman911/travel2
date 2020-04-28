import React from 'react';
import { css } from "aphrodite/no-important";
import baseStyles from "../../styles";
import styles from "./AvatarStyles";

type MyAvatarProps = {
  avatar: string
  name: string
  size: string
}

export const Avatar: React.FC<MyAvatarProps> = ({ avatar, name , size }) => {
  const avatarBG: any = () => {
    if (avatar) {
      const background = avatar !== 'undefined' ? { background: `url(${ avatar })`,backgroundSize: 'cover' } : { background: '#4196e0' };
      const letter = avatar === 'undefined' && name[0].toUpperCase();
      return { background, letter }
    }
  }
  const avatarSize = size === 'S' ? baseStyles.avatarS : baseStyles.avatarL
  return <>
    <div style={ avatarBG().background } className={ css(baseStyles.imgAv, avatarSize, baseStyles.flex, styles.background) }>
      { avatarBG().letter }
    </div>
  </>
};