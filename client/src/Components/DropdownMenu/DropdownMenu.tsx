import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';
import { userActions } from "../../redax/actions";
import { dropdownMenuItems } from './dropdownMenu.config';
import styles from './dropdownMenuStyle';

type MyDropdownMenuProps = {
  data: {
    userId: string
    token: string
    name: string
    avatar: string
  }
  setData: () => {}
}

const DropdownMenu: React.FC<MyDropdownMenuProps> = ({ data, setData }) => {
  const logout = () => {
    // @ts-ignore
    setData(null);
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
      <li className={ css(styles.li) } onClick={() => logout() }>Вийти</li>
    </ul>
  </div>
};

// @ts-ignore
export default connect(null, { ...userActions })(DropdownMenu)