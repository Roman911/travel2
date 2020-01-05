import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NavBar, Home, Article, Maps, About, LoginForm } from './Components';
import { RegisterForm } from "./modules";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route component={ Home } path="/" exact />
          <Route component={ Maps } path="/maps" />
          <Route component={ Article } path='/article' />
          <Route component={ About } path="/about" />
          <Route component={ LoginForm } path="/login" />
          <Route component={ RegisterForm } path="/register" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;