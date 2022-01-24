import axios from 'axios';

export const vCardApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_SITE_URL}/api/vCard`,
});
