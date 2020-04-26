import React from "react"
import { css } from 'aphrodite/no-important'
import styles from "./ButtonStyles"

type MyButtonLinkProps = {
  nameBtn: string
  handleClick?: () => void
}

export const ButtonLink: React.FC<MyButtonLinkProps> = ({ handleClick, nameBtn }) => {
  return <span onClick={ () => handleClick && handleClick() } className={ css(styles.btnLink) }>
    { nameBtn }
  </span>
}