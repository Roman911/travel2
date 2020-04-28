import React from "react"
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import { useLazyQuery } from '@apollo/react-hooks'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { loginQuery } from './queries'
import { Button, Loading } from '../../Components'
import { userActions, modalActions } from "../../redax/actions"
import validateForm from "../../utils/validate"
import { css } from "aphrodite/no-important"
import loginStyles from "../../styles/loginStyles"
import styles from "../../styles/FromImputStyle"
import baseStyles from "../../styles"

type MyUseLoginFormProps = {
  setData: (login: any) => void
  showModal: (arg0: string) => void
}

const LoginForm:React.FC<MyUseLoginFormProps> = ({ setData, showModal }) => {
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
      userId: login.userId, token: login.token, name: login.name, avatar: login.avatar, email: login.email
    }));
    showModal('Ви успішно увійшли!');
  }
  return <section className={css(loginStyles.wrapper)}>
    <Link to="/">
      <div className={css(loginStyles.logo)}/>
    </Link>
    <h1 className={css(loginStyles.title)}>Sign in to Travel</h1>
    <form onSubmit={ handleSubmit }>
      <div className={ css(loginStyles.wrapperForm) }>
        <p className={ css(styles.textP) }>Введіть свій email</p>
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
        <p className={ css(styles.textP) }>Введіть свій пароль</p>
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
        <div className={ css(loginStyles.inputSub) }>
          <Button
            type="submit"
            nameBtn='Увійти'
            isSubmitting={ isSubmitting }
          />
        </div>
      </div>
    </form>
    <div className={css(loginStyles.wrapperForm, loginStyles.bottomBlock)}>
      <span className={css(loginStyles.text)}>New to Travel? </span>
      <Link to="/register">
        <span className={css(loginStyles.link)}>Створити акаунт.</span>
      </Link>
    </div>
  </section>
};

export default connect(null, { ...userActions, ...modalActions })(LoginForm)