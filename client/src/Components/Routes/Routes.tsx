import React, {useState} from 'react';
import { connect } from "react-redux";
import { css } from "aphrodite/no-important";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import baseStyles from "../../styles";
import styles from "./RoutesStyles";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Avatar } from "..";
import { User } from "../../types/user";

const UseRoutes = (props: { user: User }) => {
  const { user } = props;
  const { data } = user;
  const [dropdown, setDropdown] = useState(false);
  function handleClick() {
    !dropdown ? setDropdown(true) : setDropdown(false)
  }
  if (data) {
    return <div className={ css(baseStyles.flex) }>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>
      <div className={ css(baseStyles.flex, styles.userItem) } onClick={ handleClick }>
        <Avatar name={data.name} avatar={data.avatar} />
        <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faAngleDown }/>
        { dropdown && <DropdownMenu data={ data } /> }
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

const mapStateToProps = (state: { user: User }) => ({
  user: state.user
});

export default connect(mapStateToProps)(UseRoutes)