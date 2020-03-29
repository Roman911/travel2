import React from "react";
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { useLazyQuery } from '@apollo/react-hooks';
import { css } from "aphrodite/no-important";
import { LoginForm } from "../Components/LoginForm";
import loginStyles from "../../../styles/loginStyles";
import { loginQuery } from './queries';
import { Loading } from '../../../Components/Loading/Loading';
import { userActions, modalActions } from "../../../redax/actions/";

const UseLoginForm = ({ setData, showModal }) => {
  const [ userData, { loading, data, error } ] = useLazyQuery( loginQuery );
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, setSubmitting } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      userData({
        variables: {email: values.email, password: values.password},
      });
      setSubmitting(false)
    },
  });

  if (loading) return <Loading />;
  if (error) {
    showModal('Неправильний логін або пароль');
  }
  if (data) {
    const { login } = data;
    setData(login);
    localStorage.setItem('userData', JSON.stringify({
      userId: login.userId, token: login.token, name: login.name, avatar: login.avatar
    }));
    showModal('Ви успишно увійшли!');
  }

  return <section className={css(loginStyles.wrapper)}>
    <Link to="/">
      <div className={css(loginStyles.logo)}/>
    </Link>
    <h1 className={css(loginStyles.title)}>Sign in to Travel</h1>
    <form onSubmit={handleSubmit}>
      <LoginForm values={values} touched={touched} errors={errors} handleChange={handleChange} handleBlur={handleBlur}
                 isSubmitting={isSubmitting}/>
    </form>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>New to Travel? </span>
      <Link to="/register">
        <span className={css(loginStyles.link)}>Створити акаунт.</span>
      </Link>
    </div>
  </section>
};

export default connect(null, { ...userActions, ...modalActions })(UseLoginForm)