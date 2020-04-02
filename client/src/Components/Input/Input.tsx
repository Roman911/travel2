import React from "react";
import { css } from 'aphrodite/no-important';
import styles from "./InputStyles";

type MyInputProps = {
  id: string
  title: string
  type: string
  value: string
  onChange: () => {}
  onBlur: () => {}
}

export const Input: React.FC<MyInputProps> = ({ id, title, type, value, onChange, onBlur }) => {
  return <div className={css( styles.wrapper )}>
    <p className={css( styles.paragraph )}>{ title }</p>
    <input className={css(styles.input)} id={id} type={type} value={value} onChange={onChange} onBlur={onBlur}/>
  </div>
};