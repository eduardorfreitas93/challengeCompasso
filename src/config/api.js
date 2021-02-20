import axios from 'axios';

import {API_URL, API_KEY} from '../../env';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  async (config) => {
    config.params = {...config.params, 'api-key': API_KEY};
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
