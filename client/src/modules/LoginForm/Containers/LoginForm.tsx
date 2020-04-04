import React from "react";
import { useFormik } from 'formik';
import { connect } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { LoginForm } from "../Components/LoginForm";
import { loginQuery } from './queries';
import { Loading } from '../../../Components';
import { userActions, modalActions } from "../../../redax/actions/";
import validateForm from "../../../utils/validate";

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
    validate: values => {
      let errors = {};
      validateForm({ values, errors });
      return errors;
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
  // @ts-ignore
  return <LoginForm
    handleSubmit={ handleSubmit } handleChange={ handleChange }
    values={ values } errors={ errors } touched={ touched } handleBlur={ handleBlur } isSubmitting={ isSubmitting }
  />
};

export default connect(null, { ...userActions, ...modalActions })(UseLoginForm)