import { __ } from '@wordpress/i18n';
import { InspectorControls, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import { generalStyleTabs } from '../../../utils/options';
import General from './General/General';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {
  const { buttonAlign } = attributes;
  const { selectedTemplate = '' } = attributes;
  const isTemplateSelected = Boolean(selectedTemplate);

  if (!isTemplateSelected) {
    return null;
  }
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
          describedBy={__('Button Alignment')}
          alignmentControls={[
            { title: __('Button in left', 'guten-builder-blocks'), align: 'left', icon: 'align-left' },
            { title: __('Button in center', 'guten-builder-blocks'), align: 'center', icon: 'align-center' },
            { title: __('Button in right', 'guten-builder-blocks'), align: 'right', icon: 'align-right' },
          ]}
        />
      </BlockControls>
    </>
  );
};
export default Settings;
