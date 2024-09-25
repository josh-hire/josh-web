import '@testing-library/jest-dom';
import Toastr from '../index';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom';
import ContextProvider from 'Contexts/index';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState:jest.fn(),
  useContext:()=>({ toastr:{ color:'red', isOpen:true }, setToastr:jest.fn() }),
}));

jest.mock('react-dom',()=>({
  ...jest.requireActual('react-dom'),
  createPortal:(a)=>a,
  render: jest.fn(),
}));

describe('src/component/elements/Toastr', ()=>{
  test('Toastr render',()=>{
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ContextProvider><Toastr /></ContextProvider>);
    expect(tree).toMatchSnapshot();
  });

  test('renderToastr',()=>{
    const shallow = new ShallowRenderer();
    const tree = shallow.render(
      <Toastr isOpen={true} />
    );
    const treeWrap =tree.props.children[1];
    treeWrap.props.children[2].props.onClick();
  });
});
