import React from "react";
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';
import { Button, FormItem } from "../../../Components";
import loginStyles from './../../../styles/loginStyles';

export const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit
  } = props;

  return <section className={css(loginStyles.wrapper)}>
      <Link to="/">
        <div className={css(loginStyles.logo)}/>
      </Link>
      <h1 className={css(loginStyles.title)}>Sign in to Travel</h1>
      <form onSubmit={handleSubmit}>
        <div className={ css(loginStyles.wrapperForm) }>
          <FormItem tittle='Username or email address' id="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} errors={errors.email} touched={touched.email} />
          <FormItem tittle='Password' id="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} errors={errors.password} touched={touched.password} />
          <div className={ css(loginStyles.inputSub) }>
            <Button type="submit" nameBtn='Увійти' disabled={ isSubmitting } />
          </div>
        </div>
      </form>
      <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
        <span className={css(loginStyles.text)}>New to Travel? </span>
        <Link to="/register">
          <span className={css(loginStyles.link)}>Створити акаунт.</span>
        </Link>
      </div>
    </section>
};