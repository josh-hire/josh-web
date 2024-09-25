import Select from './Select';
import { render } from '@testing-library/react';

describe('Component Test', () => {
  describe('Elements ~', () => {
    describe('Select', () => {
      it('should be able to render Elements', () => {
        render(<Select data={[]} />);
      });
    });
  });
});
