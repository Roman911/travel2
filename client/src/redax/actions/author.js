import { authorApi } from "../../utils/api";

const Actions = {
  setData: items => ({
    type: 'AUTHOR:SET_DATA',
    payload: items
  }),

  fetchAuthor: postData => dispatch => {
    return authorApi.login(postData).then(({ data }) => {
      dispatch(Actions.setData(data));
    });
  }
};

export default Actions