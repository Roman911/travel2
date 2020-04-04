import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { NavBar, Home, About, InformWindow, Maps } from './Components';
import { UseRegisterForm, UseLoginForm, CreatePostFormContainer, Posts } from "./modules";
import { UseAuth } from "./hooks/auth.hook";
import { modalActions } from './redax/actions/';

import { userType, modalType } from "./types";
type MyAppProps = {
  user: userType.User
  modal: modalType.Modal
  handleClick: () => void
}

const App:React.FC<MyAppProps> = ({ user, modal,  handleClick }) => {
  const { data, registerData } = user;
  const { text, timeout } = modal;
  UseAuth();
  let token;
  if (data) {
    token = !!data.token
  }
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Maps } path="/maps" />
          <Route
            // @ts-ignore
            component={ Posts }
            path='/post/:id'
          />
          <Route component={ About } path="/about" />
          <Route path="/login" >{ token ? <Redirect to="/" /> : <UseLoginForm /> }</Route>
          <Route path='/register'>{ ( registerData || token ) ? <Redirect to='/login' /> : <UseRegisterForm /> }</Route>
          <Route component={ CreatePostFormContainer } path="/create-post" />
        </Switch>
        { text && <InformWindow id={'modal'} children={ text } closedModal={ timeout } handleClick={ handleClick } /> }
      </div>
    </Router>
  );
};

const mapStateToProps = (state: { user: userType.User, modal: modalType.Modal }) => ({
  user: state.user,
  modal: state.modal
});

export default connect(mapStateToProps, { ...modalActions })(App);