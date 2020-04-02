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

type MyUseRoutesProps = {
  data: {
    name: string
    avatar: string
    data: string
  }
}

const UseRoutes: React.FC<MyUseRoutesProps> = ({ data }) => {
  const isAuthenticated = !!data;
  const [dropdown, setDropdown] = useState(false);
  function handleClick() {
    !dropdown ? setDropdown(true) : setDropdown(false)
  }
  if (isAuthenticated) {
    return <div className={ css(baseStyles.flex) }>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>
      <div className={ css(baseStyles.flex, styles.userItem) } onClick={ handleClick }>
        <Avatar name={data.name} avatar={data.avatar} />
        <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faAngleDown }/>
        // @ts-ignore
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

// @ts-ignore
export default connect(({ user }) => user)(UseRoutes)