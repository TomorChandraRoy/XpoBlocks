import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import Marquee from '../Common/Marquee';

const Edit = props => {
  const { attributes, setAttributes } = props;
  return (
    <>
      <Settings {...{ attributes, setAttributes }} />
      <div {...useBlockProps()}>
        <Marquee attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default Edit;
