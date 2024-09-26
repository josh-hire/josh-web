import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconArrowRight } from '../ArrowRight';
import { IconClose } from '../Close';
import { IconFacebook } from '../Facebook';
import { IconHome } from '../Home';
import { IconLinkedIn } from '../LinkedIn';
import { IconShareLink } from '../ShareLink';
import { IconTwitter } from '../Twitter';

describe('src/components/elements/Icons', ()=>{
  test('IconArrowRight',()=>{
    const { asFragment } = render(<IconArrowRight />);
    expect(asFragment()).toMatchSnapshot();
  });
  test('IconClose',()=>{
    const { asFragment } = render(<IconClose />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('IconFacebook',()=>{
    const { asFragment } = render(<IconFacebook />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('IconHome',()=>{
    const { asFragment } = render(<IconHome />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('IconLinkedIn',()=>{
    const { asFragment } = render(<IconLinkedIn />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('IconShareLink',()=>{
    const { asFragment } = render(<IconShareLink />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('IconTwitter',()=>{
    const { asFragment } = render(<IconTwitter />);
    expect(asFragment()).toMatchSnapshot();
  });
});
