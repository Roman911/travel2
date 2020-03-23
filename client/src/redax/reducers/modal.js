const initialState = {
  text: null,
  timeout: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'SHOW_MODAL':
      return {
        ...state,
        text: payload
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        text: null
      };
    case 'HIDE_TIMEOUT':
      return {
        ...state,
        timeout: payload
      };
    default:
      return state;
  }
}