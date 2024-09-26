import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { JobHuntingSection } from '../JobHunting';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      hl: 'id',
    },
  }),
}));

describe('src/modules/Landing/fragments/JobHunting', () => {
  test('should be able to render JobHunting', () => {
    const root = render(<JobHuntingSection />);
    expect(root).toMatchSnapshot();
  });
});
