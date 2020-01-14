import React from 'react';
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { LoginForm, RegisterForm } from "../../modules";

const LoginRoutes = ({ data }) => {

  const isAuthenticated = !!data;

  if (isAuthenticated) {
    return <>
      <Route component={LoginForm} path="/login"/>
      <Route component={RegisterForm} path="/register"/>
    </>
  }
};

export default connect(({ user }) => user)(LoginRoutes)