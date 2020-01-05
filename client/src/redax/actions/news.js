import axios from "axios";

const actions = {
  setNews: items => ({
    type: 'NEWS:SET_ITEMS',
    payload: items
  }),
  fetchNews: () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(({data}) => {
        dispatch(actions.setNews(data))
      })
  }
};

export default actions