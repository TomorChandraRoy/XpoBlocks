import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, TextControl, SelectControl, TextareaControl, RangeControl, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { TabButton, MediaControl, ColorControl } from 'tr-tools';
const textDomain = 'xpo-blocks';

const General = ({ attributes, setAttributes }) => {
	const { beforeImage, afterImage, showLabels, beforeLabel, afterLabel, dividerIcon, customDividerIcon, dividerIconSize, dividerStyle, dividerColor, handleColor, handleIconColor } = attributes;
	const [ activeTab, setActiveTab ] = useState( 'before' );

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', textDomain)} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined before/after slider template style.', textDomain)}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', textDomain)}
        </Button>
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Images', textDomain)} initialOpen={false}>
        <TabButton
          activeTab={activeTab}
          onChange={setActiveTab}
          tabs={[
            { name: 'before', title: __('Before', textDomain), icon: null },
            { name: 'after', title: __('After', textDomain), icon: null },
          ]}
        />

        {(beforeImage?.url || afterImage?.url) && (
          <Button
            isSecondary
            onClick={() => setAttributes({ beforeImage: afterImage, afterImage: beforeImage })}
            style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
          >
            {__('🔄 Swap Images', textDomain)}
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
                label={__('Before Image URL / Source', textDomain)}
                value={beforeImage?.url || ''}
                onChange={val => setAttributes({ beforeImage: val ? { url: val, alt: beforeImage?.alt || '' } : null })}
                allowedTypes={['image']}
                buttonLabel={__('Upload / Select Image', textDomain)}
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
                label={__('After Image URL / Source', textDomain)}
                value={afterImage?.url || ''}
                onChange={val => setAttributes({ afterImage: val ? { url: val, alt: afterImage?.alt || '' } : null })}
                allowedTypes={['image']}
                buttonLabel={__('Upload / Select Image', textDomain)}
              />
            </div>
          )}
        </div>
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Labels', textDomain)} initialOpen={false}>
        <ToggleControl
          label={__('Show Labels', textDomain)}
          checked={showLabels !== false} // defaults to true if undefined, but block.json has default true
          onChange={val => setAttributes({ showLabels: val })}
        />
        {showLabels !== false && (
          <>
            <TextControl
              label={__('Before Label', textDomain)}
              value={beforeLabel || 'Before'}
              onChange={val => setAttributes({ beforeLabel: val })}
            />
            <TextControl
              label={__('After Label', textDomain)}
              value={afterLabel || 'After'}
              onChange={val => setAttributes({ afterLabel: val })}
            />
          </>
        )}
      </PanelBody>

      <PanelBody className='bPlPanelBody' title={__('Divider', textDomain)} initialOpen={false}>
        <SelectControl
          label={__('Divider Line Style', textDomain)}
          value={dividerStyle}
          options={[
            { label: __('Solid Line', textDomain), value: 'solid' },
            { label: __('Neon Glow', textDomain), value: 'neon' },
            { label: __('Faded Gradient', textDomain), value: 'gradient' },
          ]}
          onChange={val => setAttributes({ dividerStyle: val })}
        />
        <ColorControl
          label={__('Divider Line Color', textDomain)}
          value={dividerColor}
          onChange={color => setAttributes({ dividerColor: color })}
          defaultColor="#ffffff"
        />
        <ColorControl
          label={__('Handle Background Color', textDomain)}
          value={handleColor}
          onChange={color => setAttributes({ handleColor: color })}
          defaultColor="#111111"
        />
        <ColorControl
          label={__('Handle Icon / Text Color', textDomain)}
          value={handleIconColor}
          onChange={color => setAttributes({ handleIconColor: color })}
          defaultColor="#ffffff"
        />
        <SelectControl
          label={__('Divider Icon', textDomain)}
          value={dividerIcon}
          options={[
            { label: __('Dots', textDomain), value: 'dots' },
            { label: __('Arrows', textDomain), value: 'arrows' },
            { label: __('Lines', textDomain), value: 'lines' },
            { label: __('Gripper', textDomain), value: 'gripper' },
            { label: __('Circle Arrows', textDomain), value: 'circle-arrows' },
            { label: __('Plus / Crosshair', textDomain), value: 'plus' },
            { label: __('Custom SVG', textDomain), value: 'custom' },
          ]}
          onChange={val => setAttributes({ dividerIcon: val })}
        />
        <RangeControl
          label={__('Divider Icon Size (px)', textDomain)}
          value={dividerIconSize}
          onChange={val => setAttributes({ dividerIconSize: val })}
          min={10}
          max={100}
        />
        {dividerIcon === 'custom' && (
          <TextareaControl
            label={__('Custom SVG Code', textDomain)}
            value={customDividerIcon}
            onChange={val => setAttributes({ customDividerIcon: val })}
            help={__('Paste your raw SVG code here.', textDomain)}
          />
        )}
      </PanelBody>
    </>
  );
};

export default General;
