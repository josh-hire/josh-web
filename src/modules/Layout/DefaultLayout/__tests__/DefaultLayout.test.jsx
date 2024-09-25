import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import DefaultLayout from '../index';

jest.mock('Modules/Transition');
jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: 'http://localhost',
    push: jest.fn(),
    query: {
      id: 'testId',
      slug: 'test',
      hl: 'id',
    },
  }),
}));

describe('src/components/modules/Layout/DefaultLayout', () => {
  test('DefaultLayout', () => {
    const { asFragment } = render(<DefaultLayout />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('DefaultLayout Function', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<DefaultLayout />);
    expect(tree).toMatchSnapshot();
  });
});
