import { api } from './api';

export const getTemplateData = async (slug, query) => {
  try {
    const { data } = await api.get(slug, {
      headers: { 'x-init': 'true' },
    });

    const { data: queryData } = await api.get(slug, {
      headers: { 'x-init': 'true' },
      params: query || null
    });

    return {data, queryData};
  } catch (error) {
    return { status: error.response.status };
  }
};
