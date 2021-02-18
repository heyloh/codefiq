import axios from 'axios';

const api = axios.create({
  baseURL: 'https://codefiq.herokuapp.com',
});

export default api;