import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-aaf4a.firebaseio.com/'
});

export default instance;
