import React from "react";
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { LoginForm } from "../Components/LoginForm";
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
    showModal('Ви успішно увійшли!');
  }

  return <LoginForm values={values} touched={touched} errors={errors} handleChange={handleChange} handleBlur={handleBlur}
                 isSubmitting={isSubmitting} handleSubmit={ handleSubmit }/>
};

export default connect(null, { ...userActions, ...modalActions })(UseLoginForm)