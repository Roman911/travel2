import React from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Language } from "..";
import UseRoutes from '../Routes/Routes'
import baseStyles from '../../styles';
import styles from './navBarStyles';
import { baseText } from '../../assets/baseUK';

export const NavBar: React.FC = () => {
  const links = baseText.navBar.map((item, index) => {
    return <li key={ index }>
      <Link to={ item.path }>{ item.title }</Link>
    </li>
  });
  return <nav className={ css(styles.nav, baseStyles.boxShadow) }>
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
        // @ts-ignore
        <UseRoutes />
        <Language />
      </div>
    </div>
  </nav>
};