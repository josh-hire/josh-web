import '@testing-library/jest-dom';
import { UserButton } from '../UserButton';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom';

describe('src/component/elements/UserButton', ()=>{
  test('UserButton render',()=>{
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<UserButton />);
    expect(tree).toMatchSnapshot();
  });
});
