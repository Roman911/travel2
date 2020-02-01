import axios from 'axios';

export default {
  login: postData => axios.post('/post/create', postData)
}