import { userType } from "../../types";

const initialState = {
  data: null,
  registerData: null
};

type ActionType = {
  payload: userType.UserData | userType.CreateUserData
  type: string
}

export default (state = initialState, actions: ActionType) => {
  switch (actions.type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: actions.payload
      };
    case 'USER:REGISTER_DATA':
      return {
        ...state,
        registerData: actions.payload
      };
    default:
      return state;
  }
}