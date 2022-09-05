import { apiEndpoint } from '../../../global-props';

const getAlbums = async (authToken: string) => {
  const albumPageSize = '50';
  const parameters = new URLSearchParams();
  parameters.append('pageSize', albumPageSize);
  const albumResponse = await fetch(apiEndpoint + '/v1/albums?' + parameters, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + authToken,
    },
  });
  const result = await albumResponse.json();
  return result;
};

export const profileProxy = {
  getAlbums,
};
