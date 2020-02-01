import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { css } from "aphrodite/no-important";
import baseStyles from "../../styles";
import styles from "./FromImputStyle";

export const FormItem = ({ tittle, id, type, values, errors, touched, onChange, onBlur }) => {
  return <>
    <p className={ css(styles.textP) }>{ tittle }</p>
    <div className={ css(styles.inputWrapper) }>
      <input
        id={ id }
        className={ errors && touched ? css(styles.input, styles.error) : css(styles.input) }
        type={ type }
        value={values}
        onChange={onChange}
        onBlur={onBlur}
      />
      { touched && ( errors ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.errorColor) } icon={ faExclamationCircle }/> :
      <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.isOkColor) } icon={ faCheckCircle }/>) }
    </div>
    {errors &&
    touched && (
      <div className="input-feedback">{errors}</div>
    )}
  </>
};