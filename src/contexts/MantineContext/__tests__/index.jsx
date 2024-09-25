import ShallowRenderer from 'react-test-renderer/shallow';
import { useState } from 'react';
import '@testing-library/jest-dom';
import { MantineContextProvider } from '../';


jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState:jest.fn(),
}));

(useState).mockImplementation(() => [true, (f) => f]);


describe('src/components/elements/MantineContextProvider', ()=>{
  test('MantineContextProvider',()=>{
    (useState).mockImplementation(() => [true, (f) => f]);
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<MantineContextProvider />);
    tree.props.toggleColorScheme({ value:'test' });
  });
});
