import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import PricingTable from '../Common/PricingTable';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />
      <div {...useBlockProps()}>
        <PricingTable attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default Edit;
