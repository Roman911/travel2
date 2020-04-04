import React from "react";
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';
import { FormikProps } from "formik";
import { Button, FormItem } from "../../../Components";
import loginStyles from '../../../styles/loginStyles';
import { LoginFormValues } from '../../../types/form';

export const LoginForm = (props: FormikProps<LoginFormValues>) => {
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
      <form onSubmit={ handleSubmit }>
        <div className={ css(loginStyles.wrapperForm) }>
          <FormItem
            tittle='Введіть свій email'
            id="email"
            type="text"
            // @ts-ignore
            value={values.email}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.email}
            // @ts-ignore
            touched={touched.email}
          />
          <FormItem
            tittle='Введіть свій пароль'
            id="password"
            type="password"
            // @ts-ignore
            value={values.password}
            handleChange={handleChange}
            handleBlur={handleBlur}
            errors={errors.password}
            // @ts-ignore
            touched={touched.password}
          />
          <div className={ css(loginStyles.inputSub) }>
            <Button
              type="submit"
              nameBtn='Увійти'
              isSubmitting={ isSubmitting }
              handleClick={ null }
            />
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