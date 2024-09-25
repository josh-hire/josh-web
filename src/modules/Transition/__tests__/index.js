import Transition from '../';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      slug: 'test transition',
    },
    asPath: 'http://test.com',
  }),
}));

describe('src/modules/Transition', () => {
  test('Transition', () => {
    const { asFragment } = render(
      <Transition>
        <div />
      </Transition>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
