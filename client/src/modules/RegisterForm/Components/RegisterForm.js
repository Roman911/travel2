import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { css } from 'aphrodite/no-important';

import {FormItem, InformWindow} from "../../../Components";
import loginStyles from '../../../styles/loginStyles';

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    status
  } = props;

  const [ modalError, setModalError ] = useState(false);
  const [ closedModal, setClosedModal ] = useState( false );
  const [ error, setError ] = useState( undefined );

  useEffect(({ status }) => {
    if (status) {
      setError(status);
      setModalError(true);
      setTimeout(() => {
        setClosedModal(true);
        setTimeout(() => {
          setModalError( false );
          setClosedModal( false )
        }, 1000)
      }, 3000)
    }
  }, [status]);

  const handleChangeModal = () => {
    setClosedModal( true );
    setTimeout(() => {
      setModalError( false );
      setClosedModal( false )
    }, 1000)
  };

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
    { modalError ? <InformWindow id={'modal'} children={ error } handleChangeModal={ handleChangeModal } closedModal={ closedModal } /> : '' }
  </section>
};

export default RegisterForm