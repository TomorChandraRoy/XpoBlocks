import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes, clientId }) => {
  return (
    <InspectorControls>
      <TabPanel className="guten-builder-blocks-tab-panel wp-block-guten-builder-blocks-table-of-contents" activeClass="guten-builder-blocks-active-tab" tabs={generalStyleTabs}>
        {tab => (
          <>
            {'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} clientId={clientId} />}
            {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
          </>
        )}
      </TabPanel>
    </InspectorControls>
  );
};
export default Settings;

