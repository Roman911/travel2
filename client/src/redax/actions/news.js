import { newsApi } from "../../utils/api";

const actions = {
  setNews: items => ({
    type: 'NEWS:SET_ITEMS',
    payload: items
  }),
  fetchNews: () => dispatch => {
    newsApi.login()
      .then(({data}) => {
      dispatch(actions.setNews(data))
    })
  }
};

export default actions