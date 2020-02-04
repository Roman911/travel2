const initialState = {
  items: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'POST:SET_DATA':
      return {
        items: payload
      };
    default:
      return state;
  }
}