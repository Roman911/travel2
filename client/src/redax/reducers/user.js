const initialState = {
  data: null,
  registerData: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: payload
      };
    case 'USER:REGISTER_DATA':
      return {
        ...state,
        registerData: payload
      };
    default:
      return state;
  }
}