import { postApi } from "../../utils/api";

const Actions = {
  setPost: data => ({
    type: 'POST:SET_DATA',
    payload: data
  }),

  fetchPost: postData => dispatch => {
    return postApi.login(postData)
      .then(({ data }) => {
      dispatch(Actions.setPost(data));
    });
  }
};

export default Actions