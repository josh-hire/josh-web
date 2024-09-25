import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Logo } from '../index';
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      hl: 'id',
    },
  }),
}));

describe('src/components/elements/Logo', () => {
  test('Logo', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
