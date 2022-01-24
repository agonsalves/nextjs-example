import { api } from './api';

export const getHomeData = () =>
  api.get('/', {
    headers: {
      'x-init': 'true',
    },
  });
