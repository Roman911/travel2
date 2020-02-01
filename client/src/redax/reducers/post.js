const initialState = {
  data: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'POST:SET_DATA':
      return {
        data: payload
      };
    default:
      return state;
  }
}