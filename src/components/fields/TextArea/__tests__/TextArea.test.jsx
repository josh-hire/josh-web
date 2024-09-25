import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextArea from '../index';

describe('src/components/fields/TextArea', ()=>{
  test('TextArea',()=>{
    const { asFragment } = render(<TextArea />);
    expect(asFragment()).toMatchSnapshot();
  });
});
