import { api } from './api';

export const getAppellateData = async () => {
  const response = await api.get('/appellate').then(res => {
    return res;
  });

  return response;
};
