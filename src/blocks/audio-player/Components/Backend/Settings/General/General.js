import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, TextControl, Button } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import { MediaControl } from 'tr-tools';
const General = ({ attributes, setAttributes, clientId }) => {
	const { blockId, audioUrl, coverUrl, timeDisplayMode, playerAlign, text, subtitle, labelText, selectedTemplate = 'template-1' } = attributes;

	const prevClientId = useRef( clientId );

	useEffect( () => {
		const clientChanged = prevClientId.current !== clientId;
		if ( ! blockId || clientChanged ) {
			const uuid = window.crypto && crypto.randomUUID
				? crypto.randomUUID().split( '-' )[ 0 ]
				: Math.random().toString( 36 ).substring( 2, 9 );
			setAttributes( { blockId: `xpo-ap-${ uuid }` } );
			prevClientId.current = clientId;
		}
	}, [ blockId, clientId, setAttributes ] );

	const isTemplateTwo = selectedTemplate === 'template-2';

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'xpo-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined audio player template style.', 'xpo-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'xpo-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Audio Source & Media', 'xpo-blocks')} initialOpen={false}>
        <MediaControl
          label={__('Audio Source / URL :', 'xpo-blocks')}
          value={audioUrl}
          onChange={val => setAttributes({ audioUrl: val })}
          allowedTypes={['audio']}
          buttonLabel={__('Upload / Select Audio', 'xpo-blocks')}
          help={__('Provide a direct audio file URL (e.g., ending with .mp3, .wav) or CDN/hosting link. Shared landing pages (like Jumpshare, Dropbox) will not work.', 'xpo-blocks')}
        />

        {!isTemplateTwo && (
          <>
            <hr />
            <MediaControl
              label={__('Cover Image URL / Source :', 'xpo-blocks')}
              value={coverUrl}
              onChange={val => setAttributes({ coverUrl: val })}
              allowedTypes={['image']}
              buttonLabel={__('Upload / Select Image', 'xpo-blocks')}
              help={__('Provide a direct image URL (e.g., ending with .jpg, .png, .webp) or CDN/hosting link.', 'xpo-blocks')}
            />
          </>
        )}
      </PanelBody>

      {!isTemplateTwo && (
        <PanelBody className="bPlPanelBody" title={__('Track Information', 'xpo-blocks')} initialOpen={false}>
          <TextControl label={__('Label Text :', 'xpo-blocks')} value={labelText} onChange={val => setAttributes({ labelText: val })} />
          <TextControl label={__('Track Title :', 'xpo-blocks')} value={text} onChange={val => setAttributes({ text: val })} />
          <TextControl label={__('Artist / Author :', 'xpo-blocks')} value={subtitle} onChange={val => setAttributes({ subtitle: val })} />
        </PanelBody>
      )}

      {/*
      <PanelBody className="bPlPanelBody" title={__('Performance Settings', 'xpo-blocks')} initialOpen={false}>
        <SelectControl
          label={__('Preload Strategy', 'xpo-blocks')}
          value={preloadStrategy}
          options={[
            { label: __('Metadata Only (Recommended)', 'xpo-blocks'), value: 'metadata' },
            { label: __('Auto (Load full file)', 'xpo-blocks'), value: 'auto' },
            { label: __('None (Do not load)', 'xpo-blocks'), value: 'none' },
          ]}
          onChange={val => setAttributes({ preloadStrategy: val })}
          help={__('Controls how much of the file the browser downloads automatically.', 'xpo-blocks')}
        />
      </PanelBody> */}

      <PanelBody className="bPlPanelBody" title={__('Layout Settings', 'xpo-blocks')} initialOpen={false}>
        <SelectControl
          label={__('Block Alignment', 'xpo-blocks')}
          value={playerAlign}
          options={[
            { label: __('Left', 'xpo-blocks'), value: 'flex-start' },
            { label: __('Center', 'xpo-blocks'), value: 'center' },
            { label: __('Right', 'xpo-blocks'), value: 'flex-end' },
          ]}
          onChange={val => setAttributes({ playerAlign: val })}
          help={__('Player position in the container.', 'xpo-blocks')}
        />
        <SelectControl
          label={__('Time Display Mode', 'xpo-blocks')}
          value={timeDisplayMode}
          options={[
            { label: __('Hidden', 'xpo-blocks'), value: 'none' },
            { label: __('Elapsed Time', 'xpo-blocks'), value: 'elapsed' },
            { label: __('Remaining Time', 'xpo-blocks'), value: 'remaining' },
            { label: __('Total Duration', 'xpo-blocks'), value: 'total' },
          ]}
          onChange={val => setAttributes({ timeDisplayMode: val })}
          help={__('Shows current, remaining, or total play times.', 'xpo-blocks')}
        />
      </PanelBody>
    </>
  );
};

export default General;
