import ShallowRenderer from 'react-test-renderer/shallow';
import '@testing-library/jest-dom';
import { default as RenderHtmlModule } from '../RenderHtml';
import 'Utils/mockInterObserver';

describe('src/modules/Landing/News/fragments/NewsSection', ()=>{
  test('should be able to render NewsSection',async ()=>{
    const shallow = new ShallowRenderer();
    shallow.render(<RenderHtmlModule />);
  });

  test('should be able to render NewsSection',async ()=>{
    const shallow = new ShallowRenderer();
    shallow.render(<RenderHtmlModule data={'<div>test</div>'} />);
  });
});
