import { api } from './api';

export const getPeopleData = async () => {
  const response = await api.get('/people', {
    headers: {
      'x-init': 'true',
    },
  });

  return response;
};

export const searchPeople = async url => {
  const {
    data: { content },
  } = await api.get(url);

  return content?.hits?.person?.hits;
};
