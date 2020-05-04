import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"
import { sidebarMenuItems } from "./sidebar.config"
import styles from "./ProfileSidebarStyle"
import { Avatar, Button } from "../../../Components"

type SidebarProps = {
  name: string
  avatar: string
  email: string
  closeSidebar: () => void
  isOpen: null | boolean
  logout: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({ name, avatar, email, closeSidebar, isOpen, logout }) => {

  const sidebar = sidebarMenuItems.map((item, index) => {
    return <li className={ css(styles.li) } key={ index }>
      <Link onClick={ () => closeSidebar() } className={ css(styles.link) } to={ item.route }>{ item.title }</Link>
    </li>
  })

  const viewSidebar = isOpen ? css(styles.sidebar, styles.closeSidebar) : css(styles.sidebar, styles.openSidebar)

  return <section className={ css(styles.wrapper) }>
    <div className={ viewSidebar }>
      <button className={ css(styles.btn) } onClick={ () => closeSidebar() } >
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faTimes } />
      </button>
      <Avatar avatar={ avatar } name={ name } size='L' />
      <p className={ css(styles.email) }>{ email }</p>
      <p className={ css(styles.rating) }>рейтинг: 100</p>
      <div className={ css(styles.btnWrapper) }>
        <Link onClick={ () => closeSidebar() } to='/create-post'><Button nameBtn='Додати статю' isSubmitting={ false } /></Link>
        <div className={ css(styles.br) }/>
        <Link onClick={ () => closeSidebar() } to='/create-location'><Button nameBtn='Додати локацію' isSubmitting={ false } /></Link>
      </div>
      <ul className={ css(styles.ul) }>
        { sidebar }
        <li className={ css(styles.li) }>
          <p onClick={ () => logout() } className={ css(styles.link) }>Вийти</p>
        </li>
      </ul>
    </div>
  </section>
}