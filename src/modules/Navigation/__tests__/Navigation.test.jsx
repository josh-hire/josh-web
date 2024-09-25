import ShallowRenderer from 'react-test-renderer/shallow';
import { default as Navigation } from '../Navigation';

describe('src/components/Navigation', ()=>{
  test('Navigation',()=>{
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Navigation hidden="false" links="https://test.com"/>);
    expect(tree).toMatchSnapshot();
  });
});
