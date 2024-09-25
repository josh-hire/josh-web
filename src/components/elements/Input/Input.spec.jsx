import ShallowRenderer from 'react-test-renderer/shallow';

import Input from './Input';

describe('Component Test', () => {
  describe('Elements ~', () => {
    describe('Input', () => {
      it('should be able to render Elements', () => {
        const shallow = ShallowRenderer.createRenderer();
        shallow.render(
          <Input
            disabled
            icon={<div />}
            input={{ value: 'test' }}
            message="test"
            meta={{
              dirty: undefined,
              error: undefined,
              touched: true,
              submitError: 'error',
            }}
            required
          />,
        );
      });
    });
  });
});
