import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl, SelectControl, TextControl, Button, Tooltip, __experimentalSpacer as Spacer } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { addIcon, arrowDownIcon, arrowUpIcon, trashIcon } from '../../../../utils/icons';


import { useState } from '@wordpress/element';
import { UnitControl } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';

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
      <PanelBody className="bPlPanelBody" title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
        <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined divider template style.', 'guten-builder-blocks')}</p>
        <Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
          {__('Change Template', 'guten-builder-blocks')}
        </Button>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Images & Links', 'guten-builder-blocks')} initialOpen={true}>
        <div className="gbb-mq-url-input-container">
          <span className="gbb-mq-url-input-label">{__('Add Image by URL (SVG/PNG/JPG)', 'guten-builder-blocks')}</span>
          <div className="gbb-mq-url-input-row">
            <TextControl placeholder="https://example.com/logo.svg" value={imageUrl} onChange={setImageUrl} __nextHasNoMarginBottom={true} />
            <Button variant="secondary" onClick={addFromUrl} disabled={!imageUrl}>
              {__('Add', 'guten-builder-blocks')}
            </Button>
          </div>
        </div>

        {images.length > 0 && (
          <>
            <ToggleControl label={__('Open links in New Tab', 'guten-builder-blocks')} checked={openInNewTab} onChange={val => setAttributes({ openInNewTab: val })} help={__('N.B: Links will only be clickable on the live frontend.', 'guten-builder-blocks')} />

            <hr />

            <div className="gbb-mq-images-list">
              {images.map((img, i) => (
                <div key={i} className="gbb-mq-image-item">
                  <div className="gbb-mq-image-item-header">
                    {/* Image Preview */}
                    <div className="gbb-mq-image-preview">
                      <img src={img.url} alt={img.alt} />
                    </div>

                    {/* Action Buttons */}
                    <div className="gbb-mq-image-actions">
                      <Tooltip text={__('Move Up', 'guten-builder-blocks')}>
                        <Button isSmall variant="tertiary" icon={arrowUpIcon} onClick={() => moveImage(i, -1)} disabled={i === 0} />
                      </Tooltip>
                      <Tooltip text={__('Move Down', 'guten-builder-blocks')}>
                        <Button isSmall variant="tertiary" icon={arrowDownIcon} onClick={() => moveImage(i, 1)} disabled={i === images.length - 1} />
                      </Tooltip>
                      <Tooltip text={__('Remove', 'guten-builder-blocks')}>
                        <Button isSmall variant="tertiary" isDestructive icon={trashIcon} onClick={() => deleteImage(i)} />
                      </Tooltip>
                    </div>
                  </div>

                  {/* URL and Link Inputs */}
                  <div className="gbb-mq-image-inputs">
                    <TextControl label={<span>{__('Image Source URL', 'guten-builder-blocks')}</span>} placeholder="https://..." value={img.url} onChange={val => updateImageUrl(i, val)} __nextHasNoMarginBottom={true} />
                    <TextControl label={<span>{__('Destination Link', 'guten-builder-blocks')}</span>} placeholder="https://..." value={img.link} onChange={val => updateLink(i, val)} __nextHasNoMarginBottom={true} />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <MediaUploadCheck fallback={<p className="gbb-mq-permission-error">{__('You do not have permission to upload media.', 'guten-builder-blocks')}</p>}>
          <MediaUpload
            multiple={true}
            onSelect={onSelectImages}
            allowedTypes={['image']}
            render={({ open }) => (
              <Button variant="primary" icon={addIcon} onClick={open} className="gbb-mq-add-btn">
                {__('Add Images', 'guten-builder-blocks')}
              </Button>
            )}
          />
        </MediaUploadCheck>
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={__('Dimensions & Layout', 'guten-builder-blocks')} initialOpen={false}>
        <UnitControl label={__('Container Max Width', 'guten-builder-blocks')} value={containerMaxWidth} onChange={val => setAttributes({ containerMaxWidth: val })} units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]} defaultVal="1024px" />
        <Spacer />
        <UnitControl label={__('Image Size', 'guten-builder-blocks')} value={itemHeight} onChange={val => setAttributes({ itemHeight: val })} units={[pxUnit(), remUnit(), emUnit()]} defaultVal="100px" />
        <Spacer />
        <ToggleControl label={__('Show Container Border', 'guten-builder-blocks')} checked={showBorder} onChange={val => setAttributes({ showBorder: val })} />
        <Spacer />
        <ToggleControl label={__('Show Top Text', 'guten-builder-blocks')} checked={showTopText} onChange={val => setAttributes({ showTopText: val })} />
        <Spacer />
        <ToggleControl label={__('Edge Fade Effect', 'guten-builder-blocks')} checked={edgeFade} onChange={val => setAttributes({ edgeFade: val })} />
      </PanelBody>

      <PanelBody className="bPlPanelBody"  title={__('Movement & Engine', 'guten-builder-blocks')} initialOpen={false}>
        <RangeControl label={__('Base Speed (s)', 'guten-builder-blocks')} value={speed} onChange={val => setAttributes({ speed: val })} min={1} max={200} help={__('Lower number means faster loop duration.', 'guten-builder-blocks')} />
        <ToggleControl label={__('Reverse Direction', 'guten-builder-blocks')} checked={reverseDirection} onChange={val => setAttributes({ reverseDirection: val })} />
        <hr />
        <ToggleControl
          label={__('Pause on Hover / Tap', 'guten-builder-blocks')}
          checked={pauseOnHover}
          onChange={val => {
            setAttributes({ pauseOnHover: val });
            if (val) {
              setAttributes({ hoverSlowDown: false });
            }
          }}
          help={__('Completely stops the track when cursor is over it.', 'guten-builder-blocks')}
        />
        <ToggleControl
          label={__('Slow Down on Hover', 'guten-builder-blocks')}
          checked={hoverSlowDown}
          onChange={val => {
            setAttributes({ hoverSlowDown: val });
            if (val) {
              setAttributes({ pauseOnHover: false });
            }
          }}
          help={__('Reduces velocity to 30% for a cinematic inspection feel.', 'guten-builder-blocks')}
        />
      </PanelBody>

      <PanelBody className="bPlPanelBody" title={ __( 'Smart Addons', 'guten-builder-blocks' ) } initialOpen={ false }>
        <ToggleControl
          label={ __( 'Hover Lift Effect', 'guten-builder-blocks' ) }
          checked={ liftEffect }
          onChange={ ( val ) => setAttributes( { liftEffect: val } ) }
          help={ __( 'Elevates the hovered logo organically.', 'guten-builder-blocks' ) }
        />
        <hr />
        <ToggleControl
          label={ __( 'Sibling Focus Blur', 'guten-builder-blocks' ) }
          checked={ siblingBlur }
          onChange={ ( val ) => setAttributes( { siblingBlur: val } ) }
          help={ __( 'Blurs all other logos when one is hovered.', 'guten-builder-blocks' ) }
        />
        { siblingBlur && (
          <RangeControl
            label={ __( 'Blur Intensity (px)', 'guten-builder-blocks' ) }
            value={ siblingBlurIntensity }
            onChange={ ( val ) => setAttributes( { siblingBlurIntensity: val } ) }
            min={ 1 }
            max={ 10 }
          />
        ) }
        <hr />
        <ToggleControl
          label={ __( 'Segmented Progress Rail', 'guten-builder-blocks' ) }
          checked={ showProgressRail }
          onChange={ ( val ) => setAttributes( { showProgressRail: val } ) }
          help={ __( 'Displays a tracker based on original items.', 'guten-builder-blocks' ) }
        />
        { showProgressRail && (
          <SelectControl
            label={ __( 'Rail Position', 'guten-builder-blocks' ) }
            value={ progressRailPosition }
            options={ [
              { label: __( 'Right', 'guten-builder-blocks' ), value: 'right' },
              { label: __( 'Bottom', 'guten-builder-blocks' ), value: 'bottom' }
            ] }
            onChange={ ( val ) => setAttributes( { progressRailPosition: val } ) }
          />
        ) }
        <hr />
        <ToggleControl
          label={ __( 'Pause / Slow State Indicator', 'guten-builder-blocks' ) }
          checked={ showInteractionIndicator }
          onChange={ ( val ) => setAttributes( { showInteractionIndicator: val } ) }
          help={ __( 'Shows a state badge when marquee is paused or slowed.', 'guten-builder-blocks' ) }
        />
        <ToggleControl
          label={ __( 'Active Center Highlight', 'guten-builder-blocks' ) }
          checked={ highlightActiveCenter }
          onChange={ ( val ) => setAttributes( { highlightActiveCenter: val } ) }
          help={ __( 'Scales and highlights the item closest to the center focus area.', 'guten-builder-blocks' ) }
        />
      </PanelBody>
    </>
  );
};

export default General;
