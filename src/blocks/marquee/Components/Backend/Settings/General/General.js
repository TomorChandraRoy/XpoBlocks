import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl, SelectControl, TextControl, Button, Tooltip, __experimentalSpacer as Spacer } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { addIcon, arrowDownIcon, arrowUpIcon, trashIcon } from '../../../../utils/icons';


import { useState } from '@wordpress/element';
import { UnitControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
const textDomain = 'xpo-blocks';

const General = ({ attributes, setAttributes }) => {
	const [imageUrl, setImageUrl] = useState('');
	const {
    images,
    speed,
    reverseDirection,
    pauseOnHover,
    hoverSlowDown,
    openInNewTab,
    itemHeight,
    containerMaxWidth,
    showBorder,
    showTopText,
    edgeFade,
    liftEffect,
    siblingBlur,
    siblingBlurIntensity,
    showProgressRail,
    progressRailPosition,
    showInteractionIndicator,
    highlightActiveCenter,
  } = attributes;

	const moveImage = ( index, direction ) => {
		if ( ( direction === -1 && index === 0 ) || ( direction === 1 && index === images.length - 1 ) ) {
			return;
		}
		const newImages = [ ...images ];
		const temp = newImages[ index ];
		newImages[ index ] = newImages[ index + direction ];
		newImages[ index + direction ] = temp;
		setAttributes( { images: newImages } );
	};

	const onSelectImages = ( selectedMedia ) => {
		const newImages = selectedMedia.map( media => ( {
			url: media.url,
			alt: media.alt,
			link: ''
		} ) );
		setAttributes( { images: [ ...images, ...newImages ] } ); // Unlimited images! No limit!
	};

	const addFromUrl = () => {
		if ( ! imageUrl ) return;
		const newImage = { url: imageUrl, alt: 'External Image', link: '' };
		setAttributes( { images: [ ...images, newImage ] } );
		setImageUrl( '' );
	};

	const updateImageUrl = ( index, val ) => {
		const newImages = [ ...images ];
		newImages[ index ].url = val;
		setAttributes( { images: newImages } );
	};

	const updateLink = ( index, val ) => {
		const newImages = [ ...images ];
		newImages[ index ].link = val;
		setAttributes( { images: newImages } );
	};

	const deleteImage = ( index ) => {
		setAttributes( { images: images.filter( ( _, i ) => i !== index ) } );
	};

	return (
    <>
      <PanelBody className="bPlPanelBody" title={__('Template Presets', textDomain)} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined divider template style.', textDomain)}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', textDomain)}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Images & Links', textDomain)} initialOpen={true}>
        <div className="xpo-mq-url-input-container">
          <span className="xpo-mq-url-input-label">{__('Add Image by URL (SVG/PNG/JPG)', textDomain)}</span>
          <div className="xpo-mq-url-input-row">
            <TextControl placeholder="https://example.com/logo.svg" value={imageUrl} onChange={setImageUrl} __nextHasNoMarginBottom={true} />
            <Button variant="secondary" onClick={addFromUrl} disabled={!imageUrl}>
              {__('Add', textDomain)}
            </Button>
          </div>
        </div>

        {images.length > 0 && (
          <>
            <ToggleControl label={__('Open links in New Tab', textDomain)} checked={openInNewTab} onChange={val => setAttributes({ openInNewTab: val })} help={__('N.B: Links will only be clickable on the live frontend.', textDomain)} />

            <hr />

            <div className="xpo-mq-images-list">
              {images.map((img, i) => (
                <div key={i} className="xpo-mq-image-item">
                  <div className="xpo-mq-image-item-header">
                    {/* Image Preview */}
                    <div className="xpo-mq-image-preview">
                      <img src={img.url} alt={img.alt} />
                    </div>

                    {/* Action Buttons */}
                    <div className="xpo-mq-image-actions">
                      <Tooltip text={__('Move Up', textDomain)}>
                        <Button isSmall variant="tertiary" icon={arrowUpIcon} onClick={() => moveImage(i, -1)} disabled={i === 0} />
                      </Tooltip>
                      <Tooltip text={__('Move Down', textDomain)}>
                        <Button isSmall variant="tertiary" icon={arrowDownIcon} onClick={() => moveImage(i, 1)} disabled={i === images.length - 1} />
                      </Tooltip>
                      <Tooltip text={__('Remove', textDomain)}>
                        <Button isSmall variant="tertiary" isDestructive icon={trashIcon} onClick={() => deleteImage(i)} />
                      </Tooltip>
                    </div>
                  </div>

                  {/* URL and Link Inputs */}
                  <div className="xpo-mq-image-inputs">
                    <TextControl label={<span>{__('Image Source URL', textDomain)}</span>} placeholder="https://..." value={img.url} onChange={val => updateImageUrl(i, val)} __nextHasNoMarginBottom={true} />
                    <TextControl label={<span>{__('Destination Link', textDomain)}</span>} placeholder="https://..." value={img.link} onChange={val => updateLink(i, val)} __nextHasNoMarginBottom={true} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <MediaUploadCheck fallback={<p className="xpo-mq-permission-error">{__('You do not have permission to upload media.', textDomain)}</p>}>
          <MediaUpload
            multiple={true}
            onSelect={onSelectImages}
            allowedTypes={['image']}
            render={({ open }) => (
              <Button variant="primary" icon={addIcon} onClick={open} className="xpo-mq-add-btn">
                {__('Add Images', textDomain)}
              </Button>
            )}
          />
        </MediaUploadCheck>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Dimensions & Layout', textDomain)} initialOpen={false}>
        <UnitControl label={__('Container Max Width', textDomain)} value={containerMaxWidth} onChange={val => setAttributes({ containerMaxWidth: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal="1024px" />
        <Spacer />
        <UnitControl label={__('Image Size', textDomain)} value={itemHeight} onChange={val => setAttributes({ itemHeight: val })} units={[pxUnit(), remUnit(), emUnit()]} defaultVal="100px" />
        <Spacer />
        <ToggleControl label={__('Show Container Border', textDomain)} checked={showBorder} onChange={val => setAttributes({ showBorder: val })} />
        <Spacer />
        <ToggleControl label={__('Show Top Text', textDomain)} checked={showTopText} onChange={val => setAttributes({ showTopText: val })} />
        <Spacer />
        <ToggleControl label={__('Edge Fade Effect', textDomain)} checked={edgeFade} onChange={val => setAttributes({ edgeFade: val })} />
      </PanelBody>

      <PanelBody className="bPlPanelBody"  title={__('Movement & Engine', textDomain)} initialOpen={false}>
        <RangeControl label={__('Base Speed (s)', textDomain)} value={speed} onChange={val => setAttributes({ speed: val })} min={1} max={200} help={__('Lower number means faster loop duration.', textDomain)} />
        <ToggleControl label={__('Reverse Direction', textDomain)} checked={reverseDirection} onChange={val => setAttributes({ reverseDirection: val })} />
        <hr />
        <ToggleControl
          label={__('Pause on Hover / Tap', textDomain)}
          checked={pauseOnHover}
          onChange={val => {
            setAttributes({ pauseOnHover: val });
            if (val) {
              setAttributes({ hoverSlowDown: false });
            }
          }}
          help={__('Completely stops the track when cursor is over it.', textDomain)}
        />
        <ToggleControl
          label={__('Slow Down on Hover', textDomain)}
          checked={hoverSlowDown}
          onChange={val => {
            setAttributes({ hoverSlowDown: val });
            if (val) {
              setAttributes({ pauseOnHover: false });
            }
          }}
          help={__('Reduces velocity to 30% for a cinematic inspection feel.', textDomain)}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={ __( 'Smart Addons', textDomain ) } initialOpen={ false }>
        <ToggleControl
          label={ __( 'Hover Lift Effect', textDomain ) }
          checked={ liftEffect }
          onChange={ ( val ) => setAttributes( { liftEffect: val } ) }
          help={ __( 'Elevates the hovered logo organically.', textDomain ) }
        />
        <hr />
        <ToggleControl
          label={ __( 'Sibling Focus Blur', textDomain ) }
          checked={ siblingBlur }
          onChange={ ( val ) => setAttributes( { siblingBlur: val } ) }
          help={ __( 'Blurs all other logos when one is hovered.', textDomain ) }
        />
        { siblingBlur && (
          <RangeControl
            label={ __( 'Blur Intensity (px)', textDomain ) }
            value={ siblingBlurIntensity }
            onChange={ ( val ) => setAttributes( { siblingBlurIntensity: val } ) }
            min={ 1 }
            max={ 10 }
          />
        ) }
        <hr />
        <ToggleControl
          label={ __( 'Segmented Progress Rail', textDomain ) }
          checked={ showProgressRail }
          onChange={ ( val ) => setAttributes( { showProgressRail: val } ) }
          help={ __( 'Displays a tracker based on original items.', textDomain ) }
        />
        { showProgressRail && (
          <SelectControl
            label={ __( 'Rail Position', textDomain ) }
            value={ progressRailPosition }
            options={ [
              { label: __( 'Right', textDomain ), value: 'right' },
              { label: __( 'Bottom', textDomain ), value: 'bottom' }
            ] }
            onChange={ ( val ) => setAttributes( { progressRailPosition: val } ) }
          />
        ) }
        <hr />
        <ToggleControl
          label={ __( 'Pause / Slow State Indicator', textDomain ) }
          checked={ showInteractionIndicator }
          onChange={ ( val ) => setAttributes( { showInteractionIndicator: val } ) }
          help={ __( 'Shows a state badge when marquee is paused or slowed.', textDomain ) }
        />
        <ToggleControl
          label={ __( 'Active Center Highlight', textDomain ) }
          checked={ highlightActiveCenter }
          onChange={ ( val ) => setAttributes( { highlightActiveCenter: val } ) }
          help={ __( 'Scales and highlights the item closest to the center focus area.', textDomain ) }
        />
      </PanelBody>
    </>
  );
};

export default General;
