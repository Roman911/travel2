import React from 'react';
import { css } from 'aphrodite/no-important';

import baseStyles from '../../styles/';
import loginStyles from '../../styles/loginStyles';
import styles from './ShowErrorStyles';

export const ShowError = props => {
  const {
    status,
    handleClick
  } = props;
  return <section>
    <div className={ css(loginStyles.wrapper) }>
      <div className={ css(baseStyles.flexSB, loginStyles.wrapperForm, styles.wrapper) }>
        <p className={ css(styles.text) }>{ status }</p>
        <button className={ css(loginStyles.textP) } onClick={handleClick}>X</button>
      </div>
    </div>
  </section>
};