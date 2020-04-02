import { userType } from '../../types'

const Actions = {
  setData: (data: userType.UserData) => {
    return {
      type: 'USER:SET_DATA',
      payload: data
    }
  },
  registerData: (data: userType.CreateUserData) => {
    return {
      type: 'USER:REGISTER_DATA',
      payload: data
    }
  }
};

export default Actions