import { withFormik } from "formik";
import RegisterForm from '../Components';
import validateForm from "../../../utils/validate";

const axios = require('axios').default;

export default withFormik({

  mapPropsToValues: () => ({ name: '', email: '', password: '' }),
  validate: values => {
    let errors = {};

    validateForm({ values, errors });

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    axios({
      method: 'post',
      url: '/auth/register',
      data: values
    });
    setSubmitting(false)
  },
  displayName: 'RegisterForm'
})(RegisterForm)