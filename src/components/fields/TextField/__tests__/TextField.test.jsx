import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextField from '../index';

describe('src/components/fields/TextField', ()=>{
  test('TextField',()=>{
    const { asFragment } = render(<TextField />);
    expect(asFragment()).toMatchSnapshot();
  });
});
