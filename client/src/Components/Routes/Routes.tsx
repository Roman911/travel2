import React from 'react'
import { connect } from "react-redux"
import { css } from "aphrodite/no-important"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons"
import baseStyles from "../../styles"
import styles from "./RoutesStyles"
import { Avatar } from ".."
import { User } from "../../types/user"
import { sidebarActions } from "../../redax/actions"

const UseRoutes = (props: { user: User, showSidebar: () => void }): any => {
  const { user, showSidebar } = props
  const { data } = user
  if (data) {
    return <div className={ css(baseStyles.flex) }>
      <FontAwesomeIcon className={ css(baseStyles.icon) } icon={ faBell }/>
      <div onClick={ () => showSidebar() } className={ css(baseStyles.flex, styles.userItem) } >
        <Avatar name={data.name} avatar={data.avatar} size='S' />
      </div>
    </div>
  }
  return <Link to="/login">
    <div className={ css(baseStyles.flexSB) } >
      Увійти
      <FontAwesomeIcon className={ css(baseStyles.icon, styles.user) } icon={ faUser }/>
    </div>
  </Link>
};

const mapStateToProps = (state: { user: User }) => ({
  user: state.user
});

export default connect(mapStateToProps, { ...sidebarActions })(UseRoutes)