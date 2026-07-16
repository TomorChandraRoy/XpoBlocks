import { useBlockProps, RichText } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import ScrollStory from './ScrollStory';
import DynamicStyle from './Common/dynamicStyle';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  return (
    <>
      <DynamicStyle attributes={attributes} clientId={clientId} />
      <Settings {...{ attributes, setAttributes, clientId }} />
      <div {...useBlockProps()}>
        <ScrollStory attributes={attributes} setAttributes={setAttributes} RichTextEl={RichText} isBackend={true} />
      </div>
    </>
  );
};

export default Edit;
