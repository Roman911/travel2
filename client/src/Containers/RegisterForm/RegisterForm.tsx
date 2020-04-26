import React from "react"
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { useFormik } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { css } from "aphrodite/no-important"
import { addUserMutation } from './mutations'
import validateForm from "../../utils/validate"
import { userActions, modalActions } from "../../redax/actions"
import { CreateUserData } from '../../types/user'
import loginStyles from "../../styles/loginStyles"
import styles from "../../styles/FromImputStyle"
import baseStyles from "../../styles"
import { Button } from "../../Components"

type MyUseRegisterFormProps = {
  registerData: CreateUserData
  showModal: (arg0: string) => void
}

const RegisterForm: React.FC<MyUseRegisterFormProps> = ({ registerData, showModal }): any => {
  const [ createUse ] = useMutation(addUserMutation);
  const { handleSubmit, handleChange, values, errors, touched, handleBlur, isSubmitting, setSubmitting } = useFormik({
    initialValues: { name: '', email: '', password: '', password2: '' },
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
  return <section className={css(loginStyles.wrapper)}>
    <Link to="/">
      <div className={css(loginStyles.logo)}/>
    </Link>
    <h1 className={css(loginStyles.title)}>Create your account</h1>
    <form onSubmit={handleSubmit} >
      <div className={css(loginStyles.wrapperForm)} >
        <p className={ css(styles.textP) }>Ведіть ваше імя</p>
        <div className={ css(styles.inputWrapper) }>
          <input
            id="name"
            className={ errors.name && touched.name ? css(styles.input, styles.inputUser, styles.error) : css(styles.input, styles.inputUser) }
            type="text"
            value={ values.name }
            onChange={ handleChange }
            onBlur={ handleBlur }
          />
          { touched.name && ( errors.name ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.errorColor) } icon={ faExclamationCircle }/> :
            <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.isOkColor) } icon={ faCheckCircle }/>) }
        </div>
        {errors.name &&
        touched.name && (
          <div className="input-feedback">{ errors.name }</div>
        )}
        <p className={ css(styles.textP) }>Ведіть ваш email</p>
        <div className={ css(styles.inputWrapper) }>
          <input
            id="email"
            className={ errors.email && touched.email ? css(styles.input, styles.inputUser, styles.error) : css(styles.input, styles.inputUser) }
            type="text"
            value={ values.email }
            onChange={ handleChange }
            onBlur={ handleBlur }
          />
          { touched.email && ( errors.email ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.errorColor) } icon={ faExclamationCircle }/> :
            <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.isOkColor) } icon={ faCheckCircle }/>) }
        </div>
        {errors.email &&
        touched.email && (
          <div className="input-feedback">{ errors.email }</div>
        )}
        <p className={ css(styles.textP) }>Створіть пароль</p>
        <div className={ css(styles.inputWrapper) }>
          <input
            id="password"
            className={ errors.password && touched.password ? css(styles.input, styles.inputUser, styles.error) : css(styles.input, styles.inputUser) }
            type="password"
            value={ values.password }
            onChange={ handleChange }
            onBlur={ handleBlur }
          />
          { touched.password && ( errors.password ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.errorColor) } icon={ faExclamationCircle }/> :
            <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.isOkColor) } icon={ faCheckCircle }/>) }
        </div>
        {errors.password &&
        touched.password && (
          <div className="input-feedback">{ errors.password }</div>
        )}
        <p className={ css(styles.textP) }>Повторіть пароль</p>
        <div className={ css(styles.inputWrapper) }>
          <input
            id="password2"
            className={ errors.password2 && touched.password2 ? css(styles.input, styles.inputUser, styles.error) : css(styles.input, styles.inputUser) }
            type="password"
            value={ values.password2 }
            onChange={ handleChange }
            onBlur={ handleBlur }
          />
          { touched.password2 && ( errors.password2 ? <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.errorColor) } icon={ faExclamationCircle }/> :
            <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, styles.isOkColor) } icon={ faCheckCircle }/>) }
        </div>
        {errors.password2 &&
        touched.password2 && (
          <div className="input-feedback">{ errors.password2 }</div>
        )}
        <div className={ css(loginStyles.inputSub) }>
          <Button type="submit" nameBtn='Створити акаунт' isSubmitting={ isSubmitting } />
        </div>
      </div>
    </form>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>Вже є акаунт? </span>
      <Link to="/login"><span className={css(loginStyles.link)}>Увійти в Travel.</span></Link>
    </div>
  </section>
};
// @ts-ignore
export default connect(null, { ...userActions, ...modalActions })(RegisterForm)