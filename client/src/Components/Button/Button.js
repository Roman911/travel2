import React from "react";
import { css } from 'aphrodite/no-important';

import styles from "./ButtonStyles";

export const Button = ({ type, nameBtn, handleClick }) => {
  return <button type={ type } onClick={ () => handleClick ? handleClick() : void(0) } className={ css(styles.btn) }>{ nameBtn }</button>
};