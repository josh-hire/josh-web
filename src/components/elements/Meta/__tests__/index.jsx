import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Meta from '../Meta';

describe('src/components/elements/Meta', () => {
  test('render', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Meta />);
    expect(tree).toMatchSnapshot();
  });
});
