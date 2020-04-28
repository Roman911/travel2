import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom"
import { NavBar, Home, About, InformWindow } from './Components'
import { CreatePostFormContainer, Posts, CreateLocation, ProfileSidebar } from "./modules"
import { LoginForm, RegisterForm } from "./Containers"
import { Map } from "./Containers"
import { UseAuth } from "./hooks/auth.hook"
import { modalActions } from './redax/actions/'

import { User } from "./types/user"
import { Modal } from "./types/modal"
import { typeSidebar } from "./types/sidebar"
type MyAppProps = {
  user: User
  modal: Modal
  handleClick: () => void
  sidebar: typeSidebar
}

const App:React.FC<MyAppProps> = ({ user, modal, sidebar,  handleClick }) => {
  const { data, registerData } = user
  const { text, timeout } = modal
  const { showSidebar } = sidebar
  UseAuth()
  let token
  if (data) {
    token = !!data.token
  }
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Map } path="/maps" />
          <Route component={ Posts } path='/post/:id' />
          <Route component={ About } path="/about" />
          <Route path="/login" >{ token ? <Redirect to="/" /> : <LoginForm /> }</Route>
          <Route path='/register'>{ ( registerData || token ) ? <Redirect to='/login' /> : <RegisterForm /> }</Route>
          <Route component={ CreatePostFormContainer } path="/create-post" />
          <Route component={ CreateLocation } path="/create-location" />
        </Switch>
        { text && <InformWindow id={'modal'} children={ text } closedModal={ timeout } handleClick={ handleClick } /> }
        { showSidebar && <ProfileSidebar data={ data } /> }
      </div>
    </Router>
  );
};

const mapStateToProps = (state: { user: User, modal: Modal, sidebar: typeSidebar }) => ({
  user: state.user,
  modal: state.modal,
  sidebar: state.sidebar
});

export default connect(mapStateToProps, { ...modalActions })(App);