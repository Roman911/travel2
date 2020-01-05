import React from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import loginStyles from '../../../styles/loginStyles';

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return <section className={css(loginStyles.wrapper)}>
    <Link to="/">
      <div className={css(loginStyles.logo)}/>
    </Link>
    <h1 className={css(loginStyles.title)}>Create your account</h1>
    <form onSubmit={handleSubmit} >
      <div className={css(loginStyles.wrapperForm)} >
        <p className={css(loginStyles.textP)}>Username</p>
        <input
          id="name"
          className={ errors.name && touched.name ? css(loginStyles.input, loginStyles.error) : css(loginStyles.input) }
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className={css(loginStyles.textP)}>Email address</p>
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
        <p className={css(loginStyles.textP)}>Password</p>
        <input
          id="password"
          className={ errors.password && touched.password ? css(loginStyles.input, loginStyles.error) : css(loginStyles.input) }
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
        />
        <p className={css(loginStyles.textP)}>Confirm password</p>
        <input
          id="password2"
          className={ errors.password2 && touched.password2 ? css(loginStyles.input, loginStyles.error) : css(loginStyles.input) }
          value={values.password2}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
        />
        <button className={css(loginStyles.inputSub)} type="submit" >Sign in</button>
      </div>
    </form>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>Already have an account? </span><Link to="/login"><span
      className={css(loginStyles.link)}>Sign in to Travel.</span></Link>
    </div>
  </section>
};

export default RegisterForm