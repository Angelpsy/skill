import axios from 'axios';
import { BASE_URL_API } from './config';

const wrapper = axios.create({
    baseURL: BASE_URL_API,
});

export default wrapper;
