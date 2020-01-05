export default ({ values, errors }) => {
  const rules = {
    name: (value) => {
      if (!value) {
        errors.name = 'Required';
      } else if (!/^(?=.*[a-z])/.test(value)) {
        errors.name = 'Invalid email address';
      }
    },
    email: (value) => {
      if (!value) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          value
        )
      ) {
        errors.email = 'Invalid email address';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Required';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)) {
        errors.password = 'Make password harder'
      }
    },
    password2: (value) => {
      if (!value) {
        errors.password2 = 'Required';
      } else if (values.password !== value) {
        errors.password2 = 'Make password harder'
      }
    }
  };
  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}