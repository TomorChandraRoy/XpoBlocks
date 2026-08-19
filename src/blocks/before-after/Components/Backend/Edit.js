import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import BeforeAfter from '../Common/BeforeAfter';
import DynamicStyles from '../Common/DynamicStyles';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
   const id = `block-${clientId}`;
  return (
    <>
      <Settings {...{ attributes, setAttributes }} />
      <div {...useBlockProps()}>
        <DynamicStyles attributes={attributes} id={id} />
        <BeforeAfter attributes={attributes} setAttributes={setAttributes} id={id} />
      </div>
    </>
  );
};

export default Edit;
