import React from 'react';
import { css } from 'aphrodite/no-important';

import styles from './dropdownMenuStyle';

export const DropdownMenu:React.FC = () => {
  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.triangle) } />
    <ul className={ css(styles.ul) }>
      <li className={ css(styles.li) }>Signed in as <b>Admin</b></li>
      <li className={ css(styles.li) }>Help</li>
      <li className={ css(styles.li) }>Settings</li>
      <li className={ css(styles.li) }>Sign out</li>
    </ul>
  </div>
};