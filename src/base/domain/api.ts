import axios, { AxiosRequestConfig } from 'axios';
import { JWT_KEY } from 'src/base/common/Constants';

import Helper from '../utils/helper';

const apiServerUrl = 'http://aae3-2402-800-6117-a777-c953-91a4-cc98-7e1b.ngrok.io';
// const apiServerUrl = 'http://dev.learn.goedu.asia/api/';

const getAxiosInstance = async () => {
  const token = await Helper.getDataStored(JWT_KEY);
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  const axiosInstance = axios.create({
    baseURL: apiServerUrl,
  });

  // axiosInstance.interceptors.response.use(
  //   response => {
  //     const arr = [200, 201];
  //     if (arr.indexOf(response.status) !== -1) {
  //       const res: any = {};
  //       res.status = response.status;
  //       res.data = response.data;
  //       return res;
  //     }
  //     return Promise.reject(response);
  //   },
  //   (error: AxiosError<{message: string}>) => {
  //     return Promise.reject<AxiosError<{message: string}>>(error);
  //   },
  // );

  return axiosInstance;
};

const api = async (
  url: string,
  data?: any,
  options: AxiosRequestConfig = {},
) => {
  try {
    const API = await getAxiosInstance();
    return API({ url, data, method: 'POST', ...options });
  } catch (error) {
    return Promise.reject(error);
  }
};

export default api;
