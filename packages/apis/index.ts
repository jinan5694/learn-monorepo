import axios, { AxiosRequestConfig, AxiosInstance } from "axios";


const defaultConfig: AxiosRequestConfig = {
  baseURL: '/api',
  responseType: 'json'

}


export const createAxios = function (config: AxiosRequestConfig): AxiosInstance {
  const axiosInstance = axios.create(Object.assign({}, defaultConfig, config))
  axiosInstance.interceptors.request.use

  return axiosInstance

}