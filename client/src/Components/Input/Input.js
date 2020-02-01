import React from "react";

import { css } from 'aphrodite/no-important';
import styles from "./InputStyles";

export const Input = ({ id, title, type, value, onChange, onBlur }) => {

  return <div className={css( styles.wrapper )}>
    <p className={css( styles.paragraph )}>{ title }</p>
    <input
      className={css(styles.input)}
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
};