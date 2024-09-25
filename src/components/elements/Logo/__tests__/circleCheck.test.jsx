import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { IconCircleCheck } from '../circleCheck';

describe('src/components/elements/circleCheck', ()=>{
  test('circleCheck',()=>{
    const { asFragment } = render(<IconCircleCheck />);
    expect(asFragment()).toMatchSnapshot();
  });
});
