import React from "react";
import { Link } from "react-router-dom";
import {css} from "aphrodite/no-important";
import { FormikProps } from 'formik';
import { Button, FormItem } from "../../../Components";
import loginStyles from "../../../styles/loginStyles";

import { formType } from '../../../types';

export const RegisterForm = (props: FormikProps<formType.RegisterFormValues>) => {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting } = props;
  return <section className={css(loginStyles.wrapper)}>
    <Link to="/">
      <div className={css(loginStyles.logo)}/>
    </Link>
    <h1 className={css(loginStyles.title)}>Create your account</h1>
    <form onSubmit={handleSubmit} >
      <div className={css(loginStyles.wrapperForm)} >
        <FormItem tittle='Username' id="name" type="text" value={values.name} handleChange={ handleChange } handleBlur={handleBlur} errors={errors.name}
          // @ts-ignore
                  touched={ touched.name }
        />
        <FormItem tittle='Email address' id="email" type="text" value={values.email} handleChange={handleChange} handleBlur={handleBlur} errors={errors.email}
          // @ts-ignore
                  touched={touched.email}
        />
        <FormItem tittle='Password' id="password" type="password" value={values.password} handleChange={handleChange} handleBlur={handleBlur} errors={errors.password}
          // @ts-ignore
                  touched={touched.password}
        />
        <FormItem tittle='Confirm password' id="password2" type="password" value={values.password2} handleChange={handleChange} handleBlur={handleBlur} errors={errors.password2}
          // @ts-ignore
                  touched={touched.password2}
        />
        <div className={ css(loginStyles.inputSub) }>
          <Button type="submit" nameBtn='Створити акаунт' handleClick={ null } isSubmitting={ isSubmitting } />
        </div>
      </div>
    </form>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>Already have an account? </span><Link to="/login"><span
      className={css(loginStyles.link)}>Sign in to Travel.</span></Link>
    </div>
  </section>
};