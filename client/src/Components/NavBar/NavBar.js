import React from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Language } from "../index";
import UseRoutes from '../Routes/Routes'

import baseStyles from '../../styles/index';
import styles from './navBarStyles';

import { baseText } from '../../assets/baseUK';

export const NavBar = () => {
  
  const links = baseText.navBar.map((item, index) => {
    return <li key={ index }>
      <Link to={ item.path }>{ item.title }</Link>
    </li>
  });

  return <nav className={ css(styles.nav) }>
    <div className={ css(baseStyles.wrapper, baseStyles.flexSB) }>
      <div className={ css(baseStyles.flexSB) }>
        <div className={ css(styles.logo) } />
        <ul>
          { links }
        </ul>
      </div>
      <div className={ css(baseStyles.flexSB) }>
        <div className={ css(baseStyles.flexSB, styles.wrapperInput) }>
          <input placeholder='Search' type="text"/>
          <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faSearch }/>
        </div>
        <UseRoutes />
        <Language />
      </div>
    </div>
  </nav>
};