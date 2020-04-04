import React from "react";
import { css } from 'aphrodite/no-important';
import styles from "./EntranceTicketStyles";
import stylesInput from "../../../Components/Input/InputStyles";

type MyEntranceTicketProps = {
  id: string
  title: string
  type: string
  value: string
  handleChange: () => void
  handleBlur: () => void
}

export const EntranceTicket:React.FC<MyEntranceTicketProps> = ({ id, title, type, value, handleChange, handleBlur }) => {
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