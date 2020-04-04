import React from "react";
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/react-hooks';
import { addUserMutation } from './mutations';
import validateForm from "../../../utils/validate";
import { userActions, modalActions } from "../../../redax/actions";
import { RegisterForm } from "../Components/RegisterForm";

import { userType } from '../../../types';

type MyUseRegisterFormProps = {
  registerData: userType.CreateUserData
  showModal: (arg0: string) => void
}

const UseRegisterForm:React.FC<MyUseRegisterFormProps> = ({ registerData, showModal }) => {
  const [ createUse ] = useMutation(addUserMutation);
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, setSubmitting } = useFormik({
    initialValues: { name: '', email: '', password: '' },
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
      }).then(data => {
          if (data) {
            // @ts-ignore
            registerData(data);
            showModal( 'Користувач успішно створений! Увійдіть в свій акаунт' )
          }
          setSubmitting(false)
        }).catch((errors) => {
          if (errors) {
            showModal( 'Користувач з таким емейлом зайнятий' )
          }
          setSubmitting(false)
        })},
  });
  // @ts-ignore
  return <RegisterForm handleSubmit={ handleSubmit } handleChange={ handleChange } values={ values } errors={ errors } touched={ touched } handleBlur={ handleBlur } isSubmitting={ isSubmitting } />
};

// @ts-ignore
export default connect(null, { ...userActions, ...modalActions })(UseRegisterForm)