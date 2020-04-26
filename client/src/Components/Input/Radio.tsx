import React from "react";
import { css } from "aphrodite/no-important";
import { FormikProps } from "formik";
import baseStyles from "../../styles";
import styles from "./InputStyles";

type MyRadioType = {
  id: string
  name: string
  type: string
  value: string
  tittle: string
}
// @ts-ignore
export const MiInput: React.FC = (props: MyRadioType & FormikProps<any>): any => {
  const { values, handleChange, handleBlur, id, name, type, value, tittle } = props;
  const label = id === values.type_material ? css( styles.label, styles.labelActive, baseStyles.boxShadow) : css(styles.label);

  return <>
    <input
      id={ id }
      className={ css(styles.inputRadio) }
      name={ name }
      type={ type }
      value={ value }
      onChange={ event => handleChange(event) }
      checked={values.type_material === value}
      onBlur={ handleBlur }
    />
    <label htmlFor={ id } className={ css( baseStyles.flex, styles.labelWrapper) } >
      <div className={ label } />
      { tittle }
    </label>
  </>
};