import axios from 'axios';

import { TOKEN } from 'config/storageKeys';

import { getStorageData } from 'utils/storageHeplers';


export const mainURL = process.env.API_BASE_URL; // need move to .env
// const mainURL = process.env.MAIN_URL;

const baseURL = `${mainURL}/api/v2`;

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'ru-RU',
  },
});

instance.interceptors.request.use(
  config => {
    const token = getStorageData(TOKEN);

    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
);


export const reqJsonFile = axios.create({
  baseURL: mainURL,
});

export default instance;
