import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {
  const { buttonAlign } = attributes;

  return (
    <>
      <InspectorControls>
        <TabPanel className="guten-builder-blocks-tab-panel wp-block-guten-builder-blocks-button" activeClass="guten-builder-blocks-active-tab" tabs={generalStyleTabs}>
          {tab => (
            <>
              {'general' === tab.name && <General attributes={attributes} setAttributes={setAttributes} />}

              {'style' === tab.name && <Style attributes={attributes} setAttributes={setAttributes} />}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <AlignmentToolbar
          value={buttonAlign}
          onChange={val => setAttributes({ buttonAlign: val })}
          describedBy={__('Block Name Alignment')}
          alignmentControls={[
            { title: __('Block Name in left', 'textdomain'), align: 'left', icon: 'align-left' },
            { title: __('Block Name in center', 'textdomain'), align: 'center', icon: 'align-center' },
            { title: __('Block Name in right', 'textdomain'), align: 'right', icon: 'align-right' },
          ]}
        />
      </BlockControls>
    </>
  );
};
export default Settings;
