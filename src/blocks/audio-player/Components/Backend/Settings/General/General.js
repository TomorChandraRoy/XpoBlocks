import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, TextControl, Button } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import { MediaControl } from 'tr-tools';
const textDomain = 'xpo-blocks';



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
      <PanelBody className="bPlPanelBody" title={__('Template Presets', textDomain)} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined audio player template style.', textDomain)}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', textDomain)}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Audio Source & Media', textDomain)} initialOpen={false}>
        <MediaControl
          label={__('Audio Source / URL :', textDomain)}
          value={audioUrl}
          onChange={val => setAttributes({ audioUrl: val })}
          allowedTypes={['audio']}
          buttonLabel={__('Upload / Select Audio', textDomain)}
          help={__('Provide a direct audio file URL (e.g., ending with .mp3, .wav) or CDN/hosting link. Shared landing pages (like Jumpshare, Dropbox) will not work.', textDomain)}
        />

        {!isTemplateTwo && (
          <>
            <hr />
            <MediaControl
              label={__('Cover Image URL / Source :', textDomain)}
              value={coverUrl}
              onChange={val => setAttributes({ coverUrl: val })}
              allowedTypes={['image']}
              buttonLabel={__('Upload / Select Image', textDomain)}
              help={__('Provide a direct image URL (e.g., ending with .jpg, .png, .webp) or CDN/hosting link.', textDomain)}
            />
          </>
        )}
      </PanelBody>

      {!isTemplateTwo && (
        <PanelBody className="bPlPanelBody" title={__('Track Information', textDomain)} initialOpen={false}>
          <TextControl label={__('Label Text :', textDomain)} value={labelText} onChange={val => setAttributes({ labelText: val })} />
          <TextControl label={__('Track Title :', textDomain)} value={text} onChange={val => setAttributes({ text: val })} />
          <TextControl label={__('Artist / Author :', textDomain)} value={subtitle} onChange={val => setAttributes({ subtitle: val })} />
        </PanelBody>
      )}

{/*

      <PanelBody className="bPlPanelBody" title={__('Performance Settings', textDomain)} initialOpen={false}>
        <SelectControl
          label={__('Preload Strategy', textDomain)}
          value={preloadStrategy}
          options={[
            { label: __('Metadata Only (Recommended)', textDomain), value: 'metadata' },
            { label: __('Auto (Load full file)', textDomain), value: 'auto' },
            { label: __('None (Do not load)', textDomain), value: 'none' },
          ]}
          onChange={val => setAttributes({ preloadStrategy: val })}
          help={__('Controls how much of the file the browser downloads automatically.', textDomain)}
        />
      </PanelBody> */}

      <PanelBody className="bPlPanelBody" title={__('Layout Settings', textDomain)} initialOpen={false}>
        <SelectControl
          label={__('Block Alignment', textDomain)}
          value={playerAlign}
          options={[
            { label: __('Left', textDomain), value: 'flex-start' },
            { label: __('Center', textDomain), value: 'center' },
            { label: __('Right', textDomain), value: 'flex-end' },
          ]}
          onChange={val => setAttributes({ playerAlign: val })}
          help={__('Player position in the container.', textDomain)}
        />
        <SelectControl
          label={__('Time Display Mode', textDomain)}
          value={timeDisplayMode}
          options={[
            { label: __('Hidden', textDomain), value: 'none' },
            { label: __('Elapsed Time', textDomain), value: 'elapsed' },
            { label: __('Remaining Time', textDomain), value: 'remaining' },
            { label: __('Total Duration', textDomain), value: 'total' },
          ]}
          onChange={val => setAttributes({ timeDisplayMode: val })}
          help={__('Shows current, remaining, or total play times.', textDomain)}
        />
      </PanelBody>
    </>
  );
};

export default General;
