import { withFormik } from "formik";

import withHocs from './RegisterFormHoc';
import validateForm from "../../../utils/validate";
import RegisterForm from '../Components';

const RegisterFormContainer = withFormik({
  mapPropsToValues: () => ({ name: '', email: '', password: '' }),
  validate: values => {
    let errors = {};

    validateForm({ values, errors });

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting }) => {

    const { createUser } = props;

    createUser({
      userInput: {
        name: values.name,
        email: values.email,
        password: values.password
      }
    })
      .then(() => {
        setSubmitting(false)
      })
      .catch(() => {
        setSubmitting(false)
      })
  },
  displayName: 'RegisterForm'
})(RegisterForm);

export default withHocs(RegisterFormContainer)