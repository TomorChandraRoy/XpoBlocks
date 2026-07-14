import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import BeforeAfter from '../Common/BeforeAfter';

const Edit = props => {
  const { attributes, setAttributes } = props;
  return (
    <>
      <Settings {...{ attributes, setAttributes }} />
      <div {...useBlockProps()}>
        <BeforeAfter attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default Edit;
