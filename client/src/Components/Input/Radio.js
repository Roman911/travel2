import React from "react";
import { css } from "aphrodite/no-important";

import baseStyles from "../../styles/index";
import styles from "./InputStyles";

export const MiInput = ({ values, handleChange, handleBlur, id, name, type, value, tittle }) => {

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