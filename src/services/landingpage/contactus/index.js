import * as Query from '../../../utils/query';
import { SERVICES } from 'Configs/index';
const contentType = 'application/json';

export const getContactUs = (params, callback) => {
  const options = {
    url: `/api/${SERVICES.GET_CAREERS}`,
    method: 'GET',
    headers: {
      'Content-Type': contentType,
      'auth-type': 'basic',
    },
    key: ['getContactUs', params],
    params: {
      ...params,
    },
  };
  const data = Query.GetData(options, callback);
  return data;
};
