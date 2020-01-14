import React from 'react';
import { css } from 'aphrodite/no-important';

import { userActions } from "../../redax/actions";
import store from '../../redax/store';

import styles from './dropdownMenuStyle';

const DropdownMenu = ({ data }) => {
  
  const logout = () => {
    store.dispatch(userActions.setData(null));
    localStorage.removeItem('userData')
  };

  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.triangle) } />
    <ul className={ css(styles.ul) }>
      <li className={ css(styles.li) }>Signed in as <b>{ data.name }</b></li>
      <li className={ css(styles.li) }>Help</li>
      <li className={ css(styles.li) }>Settings</li>
      <button className={ css(styles.li) } onClick={() => logout() }>Sign out</button>
    </ul>
  </div>
};

export default DropdownMenu