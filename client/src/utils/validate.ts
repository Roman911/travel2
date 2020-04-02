// @ts-ignore
export default ({ values, errors }) => {
  const rules = {
    name: (value: string) => {
      if (!value) {
        errors.name = 'Required';
      } else if (!/^(?=.*[a-z])/.test(value)) {
        errors.name = 'Invalid email address';
      }
    },
    email: (value: string) => {
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
    password: (value: string) => {
      if (!value) {
        errors.password = 'Required';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/.test(value)) {
        errors.password = 'Make password harder'
      }
    },
    password2: (value: any) => {
      if (!value) {
        errors.password2 = 'Required';
      } else if (values.password !== value) {
        errors.password2 = 'Make password harder'
      }
    }
  };
  // @ts-ignore
  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}