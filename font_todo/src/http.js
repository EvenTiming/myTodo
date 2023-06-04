import axios from 'axios';

//request port
const http = axios.create({
    baseURL: 'http://localhost:3000',
  });
export default http