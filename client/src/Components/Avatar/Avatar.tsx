import React from 'react'
import { css } from "aphrodite/no-important"
import baseStyles from "../../styles"
import styles from "./AvatarStyles"

type MyAvatarProps = {
  avatar: string
  name: string
  size: string
}

export const Avatar: React.FC<MyAvatarProps> = ({ avatar, name , size }) => {
  const avatarBG: any = () => {
    if (avatar) {
      const background = avatar !== 'undefined' ? { background: `url(${ avatar })`,backgroundSize: 'cover' } : { background: 'linear-gradient(-60deg,#16a085,#f4d03f)' }
      const letter = avatar === 'undefined' && name[0].toUpperCase();
      return { background, letter }
    }
  }

  let avatarSize
  if (size === 'S') {
    avatarSize = styles.avatarS
  } else if (size === 'L') {
    avatarSize = styles.avatarL
  } else if (size === 'XL') {
    avatarSize = styles.avatarXL
  }
  return <>
    <div style={ avatarBG().background } className={ css(styles.imgAv, avatarSize, baseStyles.flex, styles.background) }>
      { avatarBG().letter }
    </div>
  </>
}