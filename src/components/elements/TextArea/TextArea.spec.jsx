import ShallowRenderer from 'react-test-renderer/shallow';

import TextArea from './TextArea';

describe('Component Test', () => {
  describe('Elements ~', () => {
    describe('TextArea', () => {
      it('should be able to render Elements', () => {
        const shallow = ShallowRenderer.createRenderer();
        shallow.render(
          <TextArea
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
