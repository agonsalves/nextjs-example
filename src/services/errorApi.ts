import { api } from './api';

export const getErrorData = () =>
  api.get('/error404', {
    headers: {
      'x-init': 'true',
    },
  });
