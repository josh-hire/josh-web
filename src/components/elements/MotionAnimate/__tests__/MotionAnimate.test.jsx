/* eslint-disable react/jsx-handler-names */
import '@testing-library/jest-dom';
import { MotionAnimate as Component } from '../MotionAnimate';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as reactIntersectionMock from 'react-intersection-observer';

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: jest.fn,
    unobserve: jest.fn,
    disconnect: jest.fn
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('src/components/elements/MotionAnimate', ()=>{
  test('MotionAnimate rtl',()=>{
    const { asFragment } = render(<Component />);
    expect(asFragment()).toMatchSnapshot();
    
  });
  test('MotionAnimate rtl onActiveChange',()=>{

    reactIntersectionMock.InView = jest.fn().mockReturnValue({ inView: true });

    const { asFragment } = render(<Component autoAnimate onActiveChange={jest.fn} trigger />);
    expect(asFragment()).toMatchSnapshot();
    
  });
});
