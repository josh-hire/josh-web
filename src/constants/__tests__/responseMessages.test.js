import { responseMessages } from '../responseMessages';

describe('src/constants/responseMessages',()=>{
  test('responseMessages',()=>{
    const errorMessage = {
      login: {
        default: 'Sample of Login 400 Message',
        400: 'Sample 400 Message',
      },
      getListVehicle: {
        default: 'Sample of Get List Vehicle 404 Message',
        404: 'Sample 404 Not Found Message',
      },
      register: {
        default: 'Desciption of Registration 409 Message',
        409: 'Sample 409 Message',
      },
    };
    const error = responseMessages.error;
    expect(error).toEqual(errorMessage);
  });
});
