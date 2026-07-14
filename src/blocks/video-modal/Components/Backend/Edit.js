import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import VideoModal from '../Common/VideoModal';

const Edit = props => {
  const { attributes, setAttributes } = props;
  return (
    <>
      <Settings {...{ attributes, setAttributes }} />
      <div {...useBlockProps()}>
        <VideoModal attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default Edit;
