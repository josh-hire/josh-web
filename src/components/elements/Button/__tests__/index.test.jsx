import '@testing-library/jest-dom';
import { Button } from '../index';
import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState:jest.fn(),
}));

const buttonProps = {
  badge: '',
  badgeClassName: '',
  buttonProps: {},
  children: null,
  className: '',
  disabled: false,
  icon: null,
  iconPos: null,
  label: '',
  link: false,
  loading: false,
  loadingIcon: null,
  nostyle: false,
  tooltip: '',
  tooltipOptions: {},
  type:'',
};

describe('src/component/elements/Button', ()=>{
  test('renderButton',()=>{
    const shallow = new ShallowRenderer();
    shallow.render(
      <Button {...buttonProps}/>
    );
  });

  test('renderButton link true',()=>{
    buttonProps.link=true;
    const shallow = new ShallowRenderer();
    shallow.render(
      <Button {...buttonProps}/>
    );
  });

  test('renderButton with loading icon',()=>{
    buttonProps.loadingIcon=<div>loadingIcon</div>;
    buttonProps.icon=false;
    buttonProps.loading=true;
    buttonProps.label='submit';
    const shallow = new ShallowRenderer();
    shallow.render(
      <Button {...buttonProps}/>
    );
  });

  test('renderButton iconPos',()=>{
    buttonProps.label ='test';
    buttonProps.iconPos ='bottom';
    const shallow = new ShallowRenderer();
    shallow.render(
      <Button {...buttonProps}/>
    );
  });

  test('renderButton disabled',()=>{
    buttonProps.disabled =true;
    buttonProps.label =undefined;

    const shallow = new ShallowRenderer();
    shallow.render(
      <Button {...buttonProps}/>
    );
  });
});
