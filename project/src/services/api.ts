import axios, { AxiosError, AxiosInstance } from 'axios';
import { store } from '../store';
import { setErrorAction } from '../store/action';
import { BACKEND_URL } from '../const';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
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
