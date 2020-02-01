import React from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import { userActions } from "../../redax/actions";
import store from '../../redax/store';
import { dropdownMenuItems } from './dropdownMenu.config';

import styles from './dropdownMenuStyle';

const DropdownMenu = ({ data }) => {
  
  const logout = () => {
    store.dispatch(userActions.setData(null));
    localStorage.removeItem('userData')
  };

  const LiMenu = dropdownMenuItems.map((items, index) => {
    return <li className={ css(styles.li) } key={ index }>
      <Link to={ items.route }>{ items.title }</Link>
    </li>
  });

  return <div className={ css(styles.wrapper) }>
    <div className={ css(styles.triangle) } />
    <ul className={ css(styles.ul) }>
      <li className={ css(styles.li) }>{ data.name }</li>
      { LiMenu }
      <li className={ css(styles.li) } onClick={() => logout() }>Sign out</li>
    </ul>
  </div>
};

export default DropdownMenu