import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HeroSection } from '../Hero';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      hl: 'id',
    },
  }),
}));

describe('src/modules/Landing/fragments/Hero', () => {
  test('should be able to render Hero', () => {
    const root = render(<HeroSection />);
    expect(root).toMatchSnapshot();
  });
});
