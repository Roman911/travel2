import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import loginStyles from './../../../styles/loginStyles';
import { ShowError } from "../../../Components";

export const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    status,
    isSubmitting
  } = props;

  const [ errorStatus, setErrorStatus ] = useState(undefined);

  useEffect(() => {
    if (status !== null) {
      setErrorStatus(status)
    }
  }, [status]);
  
  const handleClick = () => {
    setErrorStatus(undefined)
  };
  
  return <section className={ css(loginStyles.wrapper) }>
    <Link to="/"><div className={ css(loginStyles.logo) }/></Link>
    <h1 className={ css(loginStyles.title) }>Sign in to Travel</h1>
    { errorStatus ? <ShowError status={errorStatus} handleClick={handleClick} /> : '' }
    <form onSubmit={handleSubmit}>
      <div className={ css(loginStyles.wrapperForm) }>
        <p className={ css(loginStyles.textP) }>Username or email address</p>
        <input
          id="email"
          className={ errors.email && touched.email ? css(loginStyles.input, loginStyles.error) : css(loginStyles.input) }
          type="text"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email &&
        touched.email && (
          <div className="input-feedback">{errors.email}</div>
        )}
        <p className={ css(loginStyles.textP) }>Password</p>
        <input
          id="password"
          className={ errors.password && touched.password ? css(loginStyles.input, loginStyles.error) : css(loginStyles.input) }
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
        />
        <input
          className={ css(loginStyles.inputSub) }
          type="submit"
          value="Sign in"
          disabled={ isSubmitting }
        />
      </div>
    </form>
    <div className={ css(loginStyles.wrapperForm, loginStyles.bottomBlock) }>
      <span className={ css(loginStyles.text) }>New to Travel? </span>
      <Link to="/register">
        <span className={ css(loginStyles.link) }>Create an account.</span>
      </Link>
    </div>
  </section>
};