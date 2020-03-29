import React from "react";
import { css } from 'aphrodite/no-important';

import {Button, FormItem} from "../../../Components";
import loginStyles from './../../../styles/loginStyles';

export const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
  } = props;

  return <div className={ css(loginStyles.wrapperForm) }>
    <FormItem tittle='Username or email address' id="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} errors={errors.email} touched={touched.email} />
    <FormItem tittle='Password' id="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} errors={errors.password} touched={touched.password} />
    <div className={ css(loginStyles.inputSub) }>
      <Button type="submit" nameBtn='Увійти' disabled={ isSubmitting } />
    </div>
  </div>
};