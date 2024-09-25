import * as config from '../index';
import * as services from '../services';
import * as images from '../images';

describe('src/configs', ()=>{
  test('test config index',()=>{
    expect(config.IMAGES).toMatchSnapshot();
    expect(config.COOKIE_NAME_TOKEN).toMatchSnapshot();
    expect(config.USER_PROFILE_DATA_STORAGE).toMatchSnapshot();
  });

  test('test config services',()=>{
    expect(services.services).toMatchSnapshot();
  });

  test('test config images',()=>{
    expect(images.images).toMatchSnapshot();
  });

});
