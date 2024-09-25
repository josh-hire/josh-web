import '@testing-library/jest-dom';
import Tabs from '../index';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom';

const data = [
  {
    label:'test',
    value:'test',
    badge:'test'
  },
  {
    label:'test2',
    value:'test2',
    badge:''
  }
];

describe('src/component/elements/Tabs', ()=>{
  test('Tabs render',()=>{
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Tabs data={data} defaultValue="test" value={undefined} />);
    tree.props.children[0].props.onClick();
    expect(tree).toMatchSnapshot();
  });
});
