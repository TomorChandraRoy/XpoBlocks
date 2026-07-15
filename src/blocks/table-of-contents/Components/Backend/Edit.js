import { useBlockProps } from '@wordpress/block-editor';
import Settings from './Settings/Settings';
import TableOfContents from '../Common/TableOfContents';

const Edit = props => {
  const { attributes, setAttributes, clientId } = props;
  return (
    <>
      <Settings {...{ attributes, setAttributes, clientId }} />
      <div  {...useBlockProps({ draggable: false })}>
        <TableOfContents attributes={attributes} setAttributes={setAttributes} />
      </div>
    </>
  );
};

export default Edit;

