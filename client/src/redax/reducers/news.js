const initialState = {
  items: [],
  itemsPost: null
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'NEWS:SET_ITEMS':
      return {
        items: payload
      };
    case 'POST:SET_DATA':
      return {
        itemsPost: payload
      };
    default:
      return state;
  }
}