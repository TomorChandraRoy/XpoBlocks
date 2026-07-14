import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, TextControl, ToggleControl, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const General = ({ attributes, setAttributes }) => {
  const { actionType, url, target, iconSource, customIcon1, customIcon2, customIcon3 } = attributes;

  const renderMediaUploader = (label, valueKey, currentValue) => {
    return (
      <div style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <p style={{ fontWeight: '500', marginBottom: '8px' }}>{label}</p>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
          <TextControl placeholder={__('SVG Code or URL...', 'guten-builder-blocks')} value={currentValue} onChange={v => setAttributes({ [valueKey]: v })} style={{ flexGrow: 1 }} />
          <MediaUploadCheck>
            <MediaUpload
              onSelect={media => setAttributes({ [valueKey]: media.url })}
              allowedTypes={['image', 'application/svg+xml']}
              value={currentValue}
              render={({ open }) => (
                <Button isSecondary onClick={open} style={{ height: '36px' }}>
                  {__('Upload', 'guten-builder-blocks')}
                </Button>
              )}
            />
          </MediaUploadCheck>
        </div>
        {currentValue && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '11px', color: '#666' }}>{currentValue.startsWith('http') ? __('File Uploaded', 'guten-builder-blocks') : __('Custom SVG Markup', 'guten-builder-blocks')}</span>
            <Button isDestructive isLink onClick={() => setAttributes({ [valueKey]: '' })} style={{ fontSize: '11px' }}>
              {__('Clear', 'guten-builder-blocks')}
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <PanelBody className="guten-builder-blocks-panel-body" title={__('Link Settings', 'guten-builder-blocks')} initialOpen={true}>
        <SelectControl
          label={__('Action Type', 'guten-builder-blocks')}
          value={actionType}
          options={[
            { label: __('Link', 'guten-builder-blocks'), value: 'link' },
            { label: __('Popup', 'guten-builder-blocks'), value: 'popup' },
            { label: __('None', 'guten-builder-blocks'), value: 'none' },
          ]}
          onChange={v => setAttributes({ actionType: v })}
        />

        {actionType === 'link' && (
          <>
            <TextControl label={__('URL', 'guten-builder-blocks')} value={url} onChange={v => setAttributes({ url: v })} />
            <ToggleControl label={__('Open in new tab', 'guten-builder-blocks')} checked={target === '_blank'} onChange={checked => setAttributes({ target: checked ? '_blank' : '_self' })} />
          </>
        )}
      </PanelBody>

      <PanelBody className="guten-builder-blocks-panel-body" title={__('Icon Settings', 'guten-builder-blocks')} initialOpen={true}>
        <SelectControl
          label={__('Icon Source', 'guten-builder-blocks')}
          value={iconSource || 'preset'}
          options={[
            { label: __('Preset (Leaves)', 'guten-builder-blocks'), value: 'preset' },
            { label: __('Custom SVGs', 'guten-builder-blocks'), value: 'custom' },
          ]}
          onChange={v => setAttributes({ iconSource: v })}
        />

        {iconSource === 'custom' && (
          <div style={{ marginTop: '15px' }}>
            {renderMediaUploader(__('Custom SVG Icon 1 (Right)', 'guten-builder-blocks'), 'customIcon1', customIcon1)}
            {renderMediaUploader(__('Custom SVG Icon 2 (Left Mid)', 'guten-builder-blocks'), 'customIcon2', customIcon2)}
            {renderMediaUploader(__('Custom SVG Icon 3 (Left Outer)', 'guten-builder-blocks'), 'customIcon3', customIcon3)}
          </div>
        )}
      </PanelBody>
    </>
  );
};

export default General;
