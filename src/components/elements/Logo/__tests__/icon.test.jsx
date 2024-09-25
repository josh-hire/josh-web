import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconClose } from '../close';
import { IconSad } from '../sad';

describe('src/components/elements/Logo', ()=>{
  test('IconClose',()=>{
    const { asFragment } = render(<IconClose />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('IconSad',()=>{
    const { asFragment } = render(<IconSad />);
    expect(asFragment()).toMatchSnapshot();
  });
});
