import axios, { AxiosError, AxiosInstance } from 'axios';
import { BACKEND_URL, REQUEST_TIMEOUT } from '../const';
import { store } from '../store';
import { setErrorAction } from '../store/action';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        store.dispatch(setErrorAction(error.response.status));
      }
      throw error;
    }
  );

  return api;
};
