import { combineReducers } from 'redux';
const reducers = ['user', 'modal', 'sidebar'];

export default combineReducers(
  reducers.reduce((initial: any, name: string) => {
    initial[name] = require(`./${ name }`).default;
    return initial;
  }, {}),
)