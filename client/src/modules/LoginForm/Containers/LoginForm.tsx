import React from "react";
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { LoginForm } from "../Components/LoginForm";
import { loginQuery } from './queries';
import { Loading } from '../../../Components';
import { userActions, modalActions } from "../../../redax/actions/";

type MyUseLoginFormProps = {
  setData: (login: any) => void
  showModal: (arg0: string) => void
}

const UseLoginForm:React.FC<MyUseLoginFormProps> = ({ setData, showModal }) => {
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

  return <LoginForm
    // @ts-ignore
    values={values}
    // @ts-ignore
    touched={touched}
    // @ts-ignore
    errors={errors}
    // @ts-ignore
    handleChange={handleChange}
    // @ts-ignore
    handleBlur={handleBlur}
    isSubmitting={isSubmitting}
    handleSubmit={ handleSubmit }
  />
};

export default connect(null, { ...userActions, ...modalActions })(UseLoginForm)