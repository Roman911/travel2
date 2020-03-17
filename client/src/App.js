import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { NavBar, Home, Maps, About,  } from './Components';
import { UseRegisterForm, UseLoginForm, PostCreateFormContainer, Posts } from "./modules";
import { UseAuth } from "./hooks/auth.hook";

const App = ({ data }) => {
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
          <Route component={ UseRegisterForm } path="/register" />
          <Route component={ PostCreateFormContainer } path="/post-create" />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(({user}) => user)(App);