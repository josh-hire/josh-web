import Shell from '../';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('src/modules/Shell', ()=>{
  test('Shell',()=>{
    const { asFragment } = render(<Shell><div /></Shell>);
    expect(asFragment()).toMatchSnapshot();
  });
});
