import { userApi } from "../../utils/api";

const Actions = {
  setData: data => ({
    type: 'USER:SET_DATA',
    payload: data
  }),

  fetchUserLogin: postData => dispatch => {
    return userApi.login(postData).then(({ data }) => {
      dispatch(Actions.setData(data));
      localStorage.setItem('userData', JSON.stringify({
        userId: data.userId, token: data.token, name: data.name, avatar: data.avatar
      }));
    });
  }
};

export default Actions