import {withFormik} from "formik";
import {LoginForm} from '../Components/Login';

import withHocs from './LoginFormHoc';
import validateForm from "../../../utils/validate";
import { userActions } from "../../../redax/actions";
import store from '../../../redax/store'

const LoginFormContainer = withFormik({

  enableReinitialize: true,

  mapPropsToValues: () => ({email: '', password: ''}),
  validate: values => {
    let errors = {};

    validateForm({values, errors});

    return errors;
  },
  handleSubmit: (values, {props, setSubmitting, setStatus}) => {

    const email = values.email;
    const password = values.password;

    const { data } = props;

    data.fetchMore({
      variables: { email, password },
      updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
    }).then(({ data }) => {
      setSubmitting(false);
      const { login } = data;
      store.dispatch(userActions.setData(login));
      localStorage.setItem('userData', JSON.stringify({
        userId: login.userId, token: login.token, name: login.name, avatar: login.avatar
      }));
    }).catch(err => {
      setSubmitting(false);
      console.log(err.message)
    });

  },
  displayName: 'LoginForm'
})(LoginForm);

export default withHocs(LoginFormContainer);