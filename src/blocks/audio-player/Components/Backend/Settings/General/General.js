import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, TextControl, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { MediaControl } from 'tr-tools';


const General = ({ attributes, setAttributes, clientId }) => {
	const { blockId, audioUrl, coverUrl, playerLayout, compactSize, preloadStrategy, showWaveform, enableSeekbar, enableVolume, timeDisplayMode, playerAlign, hideOnMobile, hideOnDesktop, entranceAnimation, entranceDelay, text, subtitle, labelText
	} = attributes;

	const prevClientId = useRef( clientId );

	useEffect( () => {
		const clientChanged = prevClientId.current !== clientId;
		if ( ! blockId || clientChanged ) {
			const uuid = window.crypto && crypto.randomUUID
				? crypto.randomUUID().split( '-' )[ 0 ]
				: Math.random().toString( 36 ).substring( 2, 9 );
			setAttributes( { blockId: `gbb-ap-${ uuid }` } );
			prevClientId.current = clientId;
		}
	}, [ blockId, clientId, setAttributes ] );

	const isCompact = playerLayout === 'compact';

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined audio player template style.', 'guten-builder-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'guten-builder-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Audio Source & Media', 'guten-builder-blocks')} initialOpen={false}>
        <MediaControl
          label={__('Audio Source / URL :', 'guten-builder-blocks')}
          value={audioUrl}
          onChange={val => setAttributes({ audioUrl: val })}
          allowedTypes={['audio']}
          buttonLabel={__('Upload / Select Audio', 'guten-builder-blocks')}
          help={__('Provide a direct audio file URL (e.g., ending with .mp3, .wav) or CDN/hosting link. Shared landing pages (like Jumpshare, Dropbox) will not work.', 'guten-builder-blocks')}
        />

        <hr />

        <MediaControl
          label={__('Cover Image URL / Source :', 'guten-builder-blocks')}
          value={coverUrl}
          onChange={val => setAttributes({ coverUrl: val })}
          allowedTypes={['image']}
          buttonLabel={__('Upload / Select Image', 'guten-builder-blocks')}
          help={__('Provide a direct image URL (e.g., ending with .jpg, .png, .webp) or CDN/hosting link.', 'guten-builder-blocks')}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Track Information', 'guten-builder-blocks')} initialOpen={false}>
        <TextControl label={__('Label Text :', 'guten-builder-blocks')} value={labelText} onChange={val => setAttributes({ labelText: val })} />
        <TextControl label={__('Track Title :', 'guten-builder-blocks')} value={text} onChange={val => setAttributes({ text: val })} />
        <TextControl label={__('Artist / Author :', 'guten-builder-blocks')} value={subtitle} onChange={val => setAttributes({ subtitle: val })} />
      </PanelBody>



      <PanelBody className="bPlPanelBody" title={__('Performance Settings', 'guten-builder-blocks')} initialOpen={false}>
        <SelectControl
          label={__('Preload Strategy', 'guten-builder-blocks')}
          value={preloadStrategy}
          options={[
            { label: __('Metadata Only (Recommended)', 'guten-builder-blocks'), value: 'metadata' },
            { label: __('Auto (Load full file)', 'guten-builder-blocks'), value: 'auto' },
            { label: __('None (Do not load)', 'guten-builder-blocks'), value: 'none' },
          ]}
          onChange={val => setAttributes({ preloadStrategy: val })}
          help={__('Controls how much of the file the browser downloads automatically.', 'guten-builder-blocks')}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Layout Settings', 'guten-builder-blocks')} initialOpen={false}>
        <SelectControl
          label={__('Block Alignment', 'guten-builder-blocks')}
          value={playerAlign}
          options={[
            { label: __('Left', 'guten-builder-blocks'), value: 'flex-start' },
            { label: __('Center', 'guten-builder-blocks'), value: 'center' },
            { label: __('Right', 'guten-builder-blocks'), value: 'flex-end' },
          ]}
          onChange={val => setAttributes({ playerAlign: val })}
          help={__('Player position in the container.', 'guten-builder-blocks')}
        />
        <SelectControl
          label={__('Time Display Mode', 'guten-builder-blocks')}
          value={timeDisplayMode}
          options={[
            { label: __('Hidden', 'guten-builder-blocks'), value: 'none' },
            { label: __('Elapsed Time', 'guten-builder-blocks'), value: 'elapsed' },
            { label: __('Remaining Time', 'guten-builder-blocks'), value: 'remaining' },
            { label: __('Total Duration', 'guten-builder-blocks'), value: 'total' },
          ]}
          onChange={val => setAttributes({ timeDisplayMode: val })}
          help={__('Shows current, remaining, or total play times.', 'guten-builder-blocks')}
        />
      </PanelBody>
    </>
  );
};

export default General;
