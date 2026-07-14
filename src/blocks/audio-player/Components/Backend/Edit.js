import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import AudioPlayer from '../Common/AudioPlayer';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />
      <div {...useBlockProps()}>
        <AudioPlayer attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default Edit;
