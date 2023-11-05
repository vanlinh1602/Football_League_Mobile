import { BACKEND_URL } from '../lib/config';
import Api from './api';

export const backendService = new Api({
  baseURL: BACKEND_URL,
});
