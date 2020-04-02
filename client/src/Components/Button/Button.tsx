import React from "react";
import { css } from 'aphrodite/no-important';
import styles from "./ButtonStyles";

type MyButtonProps = {
  type: "button" | "submit" | "reset" | undefined
  nameBtn: string
  handleClick: (() => void) | null
}

export const Button: React.FC<MyButtonProps> = ({ type, nameBtn, handleClick }) => {
  return <button type={ type } onClick={ () => handleClick ? handleClick() : void(0) } className={ css(styles.btn) }>
    { nameBtn }
  </button>
};