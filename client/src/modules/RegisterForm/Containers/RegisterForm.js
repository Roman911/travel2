import React, { useState } from "react";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { css } from "aphrodite/no-important";

import loginStyles from "../../../styles/loginStyles";
import { FormItem, InformWindow } from "../../../Components";
import { addUserMutation } from './mutations';
import validateForm from "../../../utils/validate";
import { modalError } from '../../../utils/modalError';

const UseRegisterForm = () => {
  const [createUse] = useMutation(addUserMutation);
  const [ isModal, setIsModal ] = useState( false );
  const [ message, setMessage ] = useState( undefined );
  const [ closedModal, setClosedModal ] = useState( false );
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, setSubmitting } = useFormik({
    initialValues: {
      name: '', email: '', password: ''
    },
    validate: values => {
      let errors = {};
      validateForm({ values, errors });
      return errors;
    },
    onSubmit: values => {
      createUse({
        variables: {
          userInput: { name: values.name, email: values.email, password: values.password }
        }
      })
        .then(data => {
          if (data) {
            modalError( setIsModal, setMessage, setClosedModal, 'Користувач успішно створений')
          }
          setSubmitting(false)
        })
        .catch((errors) => {
          if (errors) {
            modalError( setIsModal, setMessage, setClosedModal,'Користувач з таким емейлом вже зайнятий')
          }
          setSubmitting(false)
        })
    },
  });
  
  return <section className={css(loginStyles.wrapper)}>
    <Link to="/">
      <div className={css(loginStyles.logo)}/>
    </Link>
    <h1 className={css(loginStyles.title)}>Create your account</h1>
    <form onSubmit={handleSubmit} >
      <div className={css(loginStyles.wrapperForm)} >
        <FormItem tittle='Username' id="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} errors={errors.name} touched={touched.name} />
        <FormItem tittle='Email address' id="email" type="text" value={values.email} onChange={handleChange} onBlur={handleBlur} errors={errors.email} touched={touched.email} />
        <FormItem tittle='Password' id="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} errors={errors.password} touched={touched.password} />
        <FormItem tittle='Confirm password' id="password2" type="password" value={values.password2} onChange={handleChange} onBlur={handleBlur} errors={errors.password2} touched={touched.password2} />
        <button className={css(loginStyles.inputSub)} type="submit" >Sign in</button>
      </div>
    </form>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>Already have an account? </span><Link to="/login"><span
      className={css(loginStyles.link)}>Sign in to Travel.</span></Link>
    </div>
    { isModal ? <InformWindow id={'modal'} children={ message } closedModal={ closedModal } button={{ setClosedModal, setIsModal }} /> : '' }
  </section>
};

export default UseRegisterForm