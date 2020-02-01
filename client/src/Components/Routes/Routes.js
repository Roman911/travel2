import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

import baseStyles from "../../styles";
import styles from "./RoutesStyles";
import avatar from "../../assets/01.jpg";
import DropdownMenu from "../DropdownMenu";

const UseRoutes = ({ data }) => {

  const isAuthenticated = !!data;
  
  const [dropdown, setDropdown] = useState(false);

  function handleClick() {
    !dropdown ? setDropdown(true) : setDropdown(false)
  }

  const bggg = () => {
    if (data) {

      const bg = data.avatar !== 'undefined' ? { background: `url(${avatar})` } : { background: '#4196e0', color: '#fff', fontSize: '20px', justifyContent: 'center' };
      const buk = data ? data.name[0].toUpperCase() : '' ;

      return { bg, buk }
    }
  };

  if (isAuthenticated) {
    return <div className={ css(baseStyles.flex) }>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>
      <div className={ css(baseStyles.flex, styles.userItem) } onClick={ handleClick }>
        <div style={ bggg().bg } className={ css(baseStyles.imgAv, baseStyles.flex, styles.img) }>{ bggg().buk }</div>
        <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faAngleDown }/>
        { dropdown ? <DropdownMenu data={data} /> : '' }
      </div>
    </div>
  }

  return <Link to="/login">
    <div className={ css(baseStyles.flexSB) }>
      Sign In
      <FontAwesomeIcon className={ css(baseStyles.icon, styles.user) } icon={ faUser }/>
    </div>
  </Link>
};

export default connect(({ user }) => user)(UseRoutes)