import axios from 'axios';

const BASE_URL = 'https://api.gastronaut.ai/codeTest';

const instance = axios.create({
    baseURL: BASE_URL
});

export default instance;