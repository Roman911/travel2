import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {NavBar, Home, Maps, About, InformWindow,} from './Components';
import { UseRegisterForm, UseLoginForm, CreatePostFormContainer, Posts } from "./modules";
import { UseAuth } from "./hooks/auth.hook";
import { modalActions } from './redax/actions/';

const App = ({ data, registerData, text, timeout, handleClick }) => {
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
          <Route component={ Posts } path='/post/:id' />
          <Route component={ About } path="/about" />
          <Route path="/login" >
            { token ? <Redirect to="/" /> : <UseLoginForm /> }
          </Route>
          <Route path='/register'>
            { ( registerData || token ) ? <Redirect to='/login' /> : <UseRegisterForm />  }
          </Route>
          <Route component={ CreatePostFormContainer } path="/create-post" />
        </Switch>
        { text && <InformWindow id={'modal'} children={ text } closedModal={ timeout } handleClick={ handleClick } /> }
      </div>
    </Router>
  );
};

export default connect(({ user, modal }) => ({ data: user.data, registerData: user.registerData, text: modal.text, timeout: modal.timeout }), { ...modalActions })(App);