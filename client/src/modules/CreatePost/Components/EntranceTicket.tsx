import React from "react";
import { css } from 'aphrodite/no-important';
import { FormikProps } from "formik";
import styles from "./EntranceTicketStyles";
import stylesInput from "../../../Components/Input/InputStyles";

type MyEntranceTicketProps = {
  id: string
  title: string
  type: string
  value: string
}
// @ts-ignore
export const EntranceTicket: React.FC = (props: MyEntranceTicketProps & FormikProps<any>): any => {
  const { id, title, type, value, handleChange, handleBlur } = props;
  return <div className={ css(stylesInput.wrapper) }>
      <p className={css( stylesInput.paragraph, styles.textSmall )}>{ title }</p>
      <input
        className={css(stylesInput.input, styles.inputSmall)}
        id={ id }
        type={ type }
        value={ value }
        onChange={ handleChange }
        onBlur={ handleBlur }
      />
    </div>
};