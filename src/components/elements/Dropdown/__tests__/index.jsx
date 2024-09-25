import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom';
import { default as Dropdown } from '../Dropdown';
import 'Utils/mockInterObserver';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState:jest.fn().mockReturnValue([true, jest.fn()]),
  useContext: () => ({
    toastr: {
      message: '',
      color: 'info',
      isOpen: false,
    },
    setToastr: jest.fn(),
  }),
}));

const dataTab = [
  {
    title:'Semua',
    value:'all',
  },
  {
    title:'Berita',
    value:'news',
  },
  {
    title:'Event',
    value:'event',
  },
  {
    title:'Feature',
    value:'feature',
  }
];

describe('src/components/elements/Dropdown', ()=>{
  test('should be able to render Dropdown',async ()=>{
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<Dropdown data={dataTab} onSelect={jest.fn()}  />);
    Dropdown.defaultProps.onSelect();
    tree.props.children[1].props.onClick();
    tree.props.children[2].props.onBlur();
    tree.props.children[2].props.onMouseLeave();
    tree.props.children[2].props.children[1].props.onClick();
  });
});
