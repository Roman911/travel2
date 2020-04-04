import React from "react";
import { css } from 'aphrodite/no-important';
import { FormikProps } from "formik";
import styles from "./InputStyles";

type MyInputProps = {
  id: string
  title: string
  type: string
  value: string
}

export const Input = (props: MyInputProps & FormikProps<any>) => {
  const { id, title, type, value, handleChange, handleBlur } = props;
  return <div className={css( styles.wrapper )}>
    <p className={css( styles.paragraph )}>{ title }</p>
    <input className={css(styles.input)} id={id} type={type} value={value} onChange={handleChange} onBlur={handleBlur}/>
  </div>
};