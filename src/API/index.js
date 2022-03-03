import axios from 'axios';

import { getStorageData } from 'utils/storageHeplers';

export const mainURL = process.env.API_BASE_URL; // need move to .env
// const mainURL = process.env.MAIN_URL;

const baseURL = `${mainURL}/api/v1`;

const instance = axios.create({ baseURL });

instance.interceptors.request.use(
  config => {
    const token = getStorageData('token');

    if (token) {
      config.headers.Authorization = token;
    }

    config.headers['Accept-Language'] = 'ru-RU';
    return config;
  },
  // Do something with request error
  error => Promise.reject(error),
);


export const reqJsonFile = axios.create({
  baseURL: mainURL,
});

export default instance;
