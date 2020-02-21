import React from "react";
import { css } from 'aphrodite/no-important';

import styles from "./EntranceTicketStyles";
import stylesInput from "../../../Components/Input/InputStyles";

export const EntranceTicket = ({ id, title, type, value, onChange, onBlur }) => {
  return <div className={ css(stylesInput.wrapper) }>
      <p className={css( stylesInput.paragraph, styles.textSmall )}>{ title }</p>
      <input
        className={css(stylesInput.input, styles.inputSmall)}
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
};