import React from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import loginStyles from './../../../styles/loginStyles';

export const LoginForm:React.FC = () => {
  return <section className={ css(loginStyles.wrapper) }>
    <Link to="/"><div className={ css(loginStyles.logo) }/></Link>
    <h1 className={ css(loginStyles.title) }>Sign in to Travel</h1>
    <form action="/">
      <div className={ css(loginStyles.wrapperForm) }>
        <p className={ css(loginStyles.textP) }>Username or email address</p>
        <input className={ css(loginStyles.input) } type="text"/>
        <p className={ css(loginStyles.textP) }>Password</p>
        <input className={ css(loginStyles.input) } type="password"/>
        <input className={ css(loginStyles.inputSub) } type="submit" value="Sign in"/>
      </div>
    </form>
    <div className={ css(loginStyles.wrapperForm, loginStyles.bottomBlock) }>
      <span className={ css(loginStyles.text) }>New to Travel? </span><Link to="/register"><span className={ css(loginStyles.link) }>Create an account.</span></Link>
    </div>
  </section>
};