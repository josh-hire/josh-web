import '@testing-library/jest-dom';
import ShallowRenderer from 'react-test-renderer/shallow';
import { default as WrapperController } from '../WrapperController';
import { render } from '@testing-library/react';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  Controller: () => <></>,
  useForm: () => ({
    control: () => ({}),
    handleSubmit: () => jest.fn(),
  }),
}));

describe('src/components/fields/WrapperController', ()=>{
  test('should be able to render WrapperController',async ()=>{
    const root = render(<WrapperController
      control={{}}
      visible= {true}
    />);
    expect(root).toMatchSnapshot();
  });
  
  test('should be able to render WrapperController visible false',async ()=>{
    const root = render(<WrapperController
      control={{}}
      visible= {false}
    />);
    expect(root).toMatchSnapshot();
  });

  test('should be able to test children wrapper ',async ()=>{
    const shallow = ShallowRenderer.createRenderer();
    const tree = shallow.render(<WrapperController defaultError={true} />);
    const wrapChildren = tree.props.render(
      { field:{ onChange:jest.fn(), value:'test' }, formState: { errors:[]}, fieldState: { error:'' } }
    );
    wrapChildren.props.children[1].props.onChange();
    wrapChildren.props.children[1].props.rightSection.props.children[0].props.onClick();
    wrapChildren.props.children[3].props.render({ message:'test' });
  });
});
