import { IConfig } from './../../../../interfaces/';
const { envUrl } = window as IConfig;

export const urlAPI = envUrl[process.env.REACT_APP_BACKEND_API!];

export const credential = { withCredentials: true };