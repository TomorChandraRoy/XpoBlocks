import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import Accordion from '../Common/Accordion';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />
      <div {...useBlockProps()}>
        <Accordion attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default Edit;
