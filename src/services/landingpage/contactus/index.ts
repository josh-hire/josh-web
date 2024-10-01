import * as Query from '../../../utils/query';
import { SERVICES } from 'Configs/index';

const contentType = 'application/json';
interface GetContactUsParams {
  [key: string]: any;
}

interface ContactUsData {
  id: number;
  name: string;
  email: string;
  message: string;
  category: string;
  createdAt: string; 
}

// Tipe respons API `getContactUs`
interface GetContactUsResponse {
  success?: boolean;
  data: ContactUsData;
}


export const getContactUs = async (params: GetContactUsParams): Promise<any> => {
  const options = {
    url: `/api/${SERVICES.GET_CONTACTUS}`,
    method: 'GET',
    headers: {
      'Content-Type': contentType,
      'auth-type': 'basic',
    },
    key: 'getContactUs',
    params: {
      ...params,
    },
  };

  try {
    const data = await Query.GetData(options) as GetContactUsResponse;

    return data as GetContactUsResponse;
  } catch (error) {
    console.error('Error fetching contact us data:', error);
    throw error;
  }
};
