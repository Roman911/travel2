import axios from 'axios';

export default {
  login: postData => axios.post('/user', postData)
}