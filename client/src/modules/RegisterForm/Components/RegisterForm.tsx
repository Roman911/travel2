import React from "react";
import { Link } from "react-router-dom";
import {css} from "aphrodite/no-important";
import { FormikProps } from 'formik';
import { Button, FormItem } from "../../../Components";
import loginStyles from "../../../styles/loginStyles";
import { RegisterFormValues } from '../../../types/form';

export const RegisterForm = (props: FormikProps<RegisterFormValues>) => {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting } = props;
  return <section className={css(loginStyles.wrapper)}>
    <Link to="/">
      <div className={css(loginStyles.logo)}/>
    </Link>
    <h1 className={css(loginStyles.title)}>Create your account</h1>
    <form onSubmit={handleSubmit} >
      <div className={css(loginStyles.wrapperForm)} >
        <FormItem tittle='Ведіть ваше імя' id="name" type="text"
          // @ts-ignore
                  value={values.name} handleChange={ handleChange } handleBlur={handleBlur} errors={errors.name}
          // @ts-ignore
                  touched={ touched.name }
        />
        <FormItem tittle='Ведіть ваш email' id="email" type="text"
          // @ts-ignore
                  value={values.email} handleChange={handleChange} handleBlur={handleBlur} errors={errors.email}
          // @ts-ignore
                  touched={touched.email}
        />
        <FormItem tittle='Придумайте пароль' id="password" type="password"
          // @ts-ignore
                  value={values.password} handleChange={handleChange} handleBlur={handleBlur} errors={errors.password}
          // @ts-ignore
                  touched={touched.password}
        />
        <FormItem tittle='Повторіть пароль' id="password2" type="password"
          // @ts-ignore
                  value={values.password2} handleChange={handleChange} handleBlur={handleBlur} errors={errors.password2}
          // @ts-ignore
                  touched={touched.password2}
        />
        <div className={ css(loginStyles.inputSub) }>
          <Button type="submit" nameBtn='Створити акаунт' handleClick={ null } isSubmitting={ isSubmitting } />
        </div>
      </div>
    </form>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>Вже є акаунт? </span>
      <Link to="/login"><span className={css(loginStyles.link)}>Увійти в Travel.</span></Link>
    </div>
  </section>
};