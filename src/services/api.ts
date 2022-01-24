import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.gjtest.com',
  headers: {
    'x-index': 'gjtest_mako2',
    'x-page-size': '30',
  },
});
