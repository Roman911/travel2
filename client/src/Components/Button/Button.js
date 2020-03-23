import React from "react";
import { css } from 'aphrodite/no-important';

import styles from "./ButtonStyles";

export const Button = ({ handleClick }) => {
  return <button onClick={ () => handleClick() } className={ css(styles.btn) }>Закрити</button>
};