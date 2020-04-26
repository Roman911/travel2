import React from "react"
import { css } from 'aphrodite/no-important'
import styles from "./ButtonStyles"

type MyButtonProps = {
  type?: "button" | "submit" | "reset"
  nameBtn: string
  handleClick?: (() => void)
  isSubmitting: boolean
}

export const Button: React.FC<MyButtonProps> = ({ type, nameBtn, handleClick, isSubmitting }) => {
  const btnStyle = isSubmitting ? css(styles.btn, styles.btnGray) : css(styles.btn);
  return <button type={ type } onClick={ () => handleClick ? handleClick() : void(0) } className={ btnStyle }>
    { nameBtn }
  </button>
};