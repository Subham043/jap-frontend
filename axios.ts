import axios, { AxiosInstance } from 'axios';
import { ENV } from './src/env/env';
import NProgress from "nprogress";

const axiosPublic:AxiosInstance = axios.create({
    baseURL: ENV.API_ENDPOINT,
    headers: {
        post: {
            Accept: 'application/json'
        },
        get: {
            Accept: 'application/json'
        }
    },
    withCredentials: false,
})

export {
    axiosPublic
};