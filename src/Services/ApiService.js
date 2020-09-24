import axios from 'axios';
import { BASE_URL } from '../assets/Constants/constants.json';

const instance = axios.create({
    baseURL: BASE_URL
});

export default instance;