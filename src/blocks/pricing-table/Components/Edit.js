import { useBlockProps, RichText } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import PricingTable from './PricingTable';
import DynamicStyle from './Common/dynamicStyle';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  return (
    <>
      <DynamicStyle attributes={attributes} clientId={clientId} />
      <Settings {...{ attributes, setAttributes, clientId }} />
      <div {...useBlockProps()}>
        <PricingTable attributes={attributes} setAttributes={setAttributes} RichTextEl={RichText} isBackend={true} />
      </div>
    </>
  );
};

export default Edit;
