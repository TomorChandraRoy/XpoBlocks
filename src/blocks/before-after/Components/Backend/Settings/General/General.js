import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, TextControl, SelectControl, TextareaControl, RangeControl, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { TabButton, MediaControl, ColorControl } from 'tr-tools';
const General = ({ attributes, setAttributes }) => {
	const { beforeImage, afterImage, showLabels, beforeLabel, afterLabel, dividerIcon, customDividerIcon, dividerIconSize, dividerStyle, dividerColor, handleColor, handleIconColor } = attributes;
	const [ activeTab, setActiveTab ] = useState( 'before' );

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'xpo-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined before/after slider template style.', 'xpo-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'xpo-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Images', 'xpo-blocks')} initialOpen={false}>
        <TabButton
          activeTab={activeTab}
          onChange={setActiveTab}
          tabs={[
            { name: 'before', title: __('Before', 'xpo-blocks'), icon: null },
            { name: 'after', title: __('After', 'xpo-blocks'), icon: null },
          ]}
        />

        {(beforeImage?.url || afterImage?.url) && (
          <Button
            isSecondary
            onClick={() => setAttributes({ beforeImage: afterImage, afterImage: beforeImage })}
            style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
          >
            {__('🔄 Swap Images', 'xpo-blocks')}
          </Button>
        )}

        <div style={{ marginTop: '20px' }}>
          {activeTab === 'before' && (
            <div style={{ marginBottom: '20px' }}>
              {beforeImage?.url && (
                <div style={{ marginBottom: '10px' }}>
                  <img src={beforeImage.url} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                </div>
              )}
              <MediaControl
                label={__('Before Image URL / Source', 'xpo-blocks')}
                value={beforeImage?.url || ''}
                onChange={val => setAttributes({ beforeImage: val ? { url: val, alt: beforeImage?.alt || '' } : null })}
                allowedTypes={['image']}
                buttonLabel={__('Upload / Select Image', 'xpo-blocks')}
              />
            </div>
          )}

          {activeTab === 'after' && (
            <div style={{ marginBottom: '20px' }}>
              {afterImage?.url && (
                <div style={{ marginBottom: '10px' }}>
                  <img src={afterImage.url} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} alt="" />
                </div>
              )}
              <MediaControl
                label={__('After Image URL / Source', 'xpo-blocks')}
                value={afterImage?.url || ''}
                onChange={val => setAttributes({ afterImage: val ? { url: val, alt: afterImage?.alt || '' } : null })}
                allowedTypes={['image']}
                buttonLabel={__('Upload / Select Image', 'xpo-blocks')}
              />
            </div>
          )}
        </div>
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Labels', 'xpo-blocks')} initialOpen={false}>
        <ToggleControl
          label={__('Show Labels', 'xpo-blocks')}
          checked={showLabels !== false} // defaults to true if undefined, but block.json has default true
          onChange={val => setAttributes({ showLabels: val })}
        />
        {showLabels !== false && (
          <>
            <TextControl
              label={__('Before Label', 'xpo-blocks')}
              value={beforeLabel || 'Before'}
              onChange={val => setAttributes({ beforeLabel: val })}
            />
            <TextControl
              label={__('After Label', 'xpo-blocks')}
              value={afterLabel || 'After'}
              onChange={val => setAttributes({ afterLabel: val })}
            />
          </>
        )}
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Divider', 'xpo-blocks')} initialOpen={false}>
        <SelectControl
          label={__('Divider Line Style', 'xpo-blocks')}
          value={dividerStyle}
          options={[
            { label: __('Solid Line', 'xpo-blocks'), value: 'solid' },
            { label: __('Neon Glow', 'xpo-blocks'), value: 'neon' },
            { label: __('Faded Gradient', 'xpo-blocks'), value: 'gradient' },
          ]}
          onChange={val => setAttributes({ dividerStyle: val })}
        />
        <ColorControl
          label={__('Divider Line Color', 'xpo-blocks')}
          value={dividerColor}
          onChange={color => setAttributes({ dividerColor: color })}
          defaultColor="#ffffff"
        />
        <ColorControl
          label={__('Handle Background Color', 'xpo-blocks')}
          value={handleColor}
          onChange={color => setAttributes({ handleColor: color })}
          defaultColor="#111111"
        />
        <ColorControl
          label={__('Handle Icon / Text Color', 'xpo-blocks')}
          value={handleIconColor}
          onChange={color => setAttributes({ handleIconColor: color })}
          defaultColor="#ffffff"
        />
        <SelectControl
          label={__('Divider Icon', 'xpo-blocks')}
          value={dividerIcon}
          options={[
            { label: __('Dots', 'xpo-blocks'), value: 'dots' },
            { label: __('Arrows', 'xpo-blocks'), value: 'arrows' },
            { label: __('Lines', 'xpo-blocks'), value: 'lines' },
            { label: __('Gripper', 'xpo-blocks'), value: 'gripper' },
            { label: __('Circle Arrows', 'xpo-blocks'), value: 'circle-arrows' },
            { label: __('Plus / Crosshair', 'xpo-blocks'), value: 'plus' },
            { label: __('Custom SVG', 'xpo-blocks'), value: 'custom' },
          ]}
          onChange={val => setAttributes({ dividerIcon: val })}
        />
        <RangeControl
          label={__('Divider Icon Size (px)', 'xpo-blocks')}
          value={dividerIconSize}
          onChange={val => setAttributes({ dividerIconSize: val })}
          min={10}
          max={100}
        />
        {dividerIcon === 'custom' && (
          <TextareaControl
            label={__('Custom SVG Code', 'xpo-blocks')}
            value={customDividerIcon}
            onChange={val => setAttributes({ customDividerIcon: val })}
            help={__('Paste your raw SVG code here.', 'xpo-blocks')}
          />
        )}
      </PanelBody>
    </>
  );
};

export default General;
