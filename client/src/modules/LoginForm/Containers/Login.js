import {withFormik} from "formik";
import {LoginForm} from '../Components/Login';
import validateForm from "../../../utils/validate";

import {userActions} from "../../../redax/actions";

import store from '../../../redax/store';

const LoginFormContainer = withFormik({

  enableReinitialize: true,

  mapPropsToValues: () => ({email: '', password: ''}),
  validate: values => {
    let errors = {};

    validateForm({values, errors});

    return errors;
  },
  handleSubmit: (values, {setSubmitting, setStatus}) => {

    store.dispatch(userActions.fetchUserLogin(values))
      .then(() => {
        setSubmitting(false);
      })
      .catch(error => {
        setStatus(error.response.data.message);
        setTimeout(() => {
          setStatus(null)
        }, 1000);
        setSubmitting(false)
      });
  },
  displayName: 'LoginForm'
})(LoginForm);

export default LoginFormContainer;