import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NavBar, Home, Article, Maps, About,  } from './Components';
import { RegisterForm, LoginForm } from "./modules";
import { UseAuth } from "./hooks/auth.hook";

const App = () => {
  UseAuth();
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Maps } path="/maps" />
          <Route component={ Article } path='/article' />
          <Route component={ About } path="/about" />
          <Route component={ LoginForm } path="/login" hhh={123} />
          <Route component={ RegisterForm } path="/register" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;