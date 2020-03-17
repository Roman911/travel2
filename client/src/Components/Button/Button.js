import React from "react";
import { css } from 'aphrodite/no-important';

import styles from "./ButtonStyles";

import { handleChangeModal } from '../../utils/modalError';

export const Button = ({ button }) => {
  const { setClosedModal, setIsModal } = button;
  return <button onClick={ () => handleChangeModal( setClosedModal, setIsModal ) } className={ css(styles.btn) }>Закрити</button>
};