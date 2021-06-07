import axios from 'axios';
import useSWR from 'swr';

const axiosConfig = {
  baseURL: '/api',
};

const instance = axios.create(axiosConfig);

const axiosGet = async (url, options) => {
  const { data } = await instance.get(url, options);
  return data;
};

export const swrConfig = {
  fetcher: axiosGet,
};

export const getJson = (key, options) => useSWR(key, options);

export const postJson = instance.post;
