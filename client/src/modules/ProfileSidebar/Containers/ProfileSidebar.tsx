import React from "react"
import { connect } from "react-redux"
import { sidebarActions, userActions } from "../../../redax/actions"
import { Sidebar } from "../Components/Sidebar"

import { UserData } from '../../../types/user'
import { typeSidebar } from '../../../types/sidebar'
type ProfileSidebarProps = {
  data: UserData
  closeSidebar: () => void
  sidebar: typeSidebar
  setData: (data: UserData | null) => {}
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ data, setData, closeSidebar, sidebar }) => {
  const { name, avatar, email } = data
  const { isOpen } = sidebar
  const logout = () => {
    closeSidebar()
    localStorage.removeItem('userData')
    setTimeout(() => {
      setData(null)
    }, 600)
  }
  return <Sidebar name={ name } avatar={ avatar } email={ email } closeSidebar={ closeSidebar } isOpen={ isOpen } logout={ logout } />
}

const mapStateToProps = (state: { sidebar: typeSidebar }) => ({
  sidebar: state.sidebar
})

export default connect(mapStateToProps, { ...userActions, ...sidebarActions })(ProfileSidebar)