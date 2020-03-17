import { withFormik } from "formik";

import withHocs from './RegisterFormHoc';
import validateForm from "../../../utils/validate";
import RegisterForm from '../Components/RegisterForm';

const RegisterFormContainer = withFormik({
  mapPropsToValues: () => ({ name: '', email: '', password: '' }),
  validate: values => {
    let errors = {};

    validateForm({ values, errors });

    return errors;
  },

  handleSubmit: (values, { props, setSubmitting, setStatus }) => {

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
      .catch((error) => {
        error.graphQLErrors.map(({ message }) => {
          setStatus(message);
          setTimeout(() => {
            setStatus(undefined)
          }, 1000)
        });
        setSubmitting(false)
      })
  },
  displayName: 'RegisterForm'
})(RegisterForm);

export default withHocs(RegisterFormContainer)