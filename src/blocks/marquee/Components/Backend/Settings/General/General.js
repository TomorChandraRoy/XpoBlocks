import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl, TextControl, Button, Tooltip } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { addIcon, arrowDownIcon, arrowUpIcon, trashIcon } from '../../../../utils/icons';


import { useState } from '@wordpress/element';
import { UnitControl } from 'tr-tools';

const General = ({ attributes, setAttributes }) => {
	const [imageUrl, setImageUrl] = useState('');
	const {images,speed,reverseDirection,pauseOnHover,hoverSlowDown,openInNewTab,hideOnMobile,hideOnDesktop, itemWidth, itemHeight, containerMaxWidth} = attributes;

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
			<PanelBody className='bPlPanelBody' title={ __( 'Images & Links', 'guten-builder-blocks' ) } initialOpen={ true }>
				<MediaUploadCheck fallback={ <p className="gbb-mq-permission-error">{ __( 'You do not have permission to upload media.', 'guten-builder-blocks' ) }</p> }>
					<MediaUpload
						multiple={ true }
						onSelect={ onSelectImages }
						allowedTypes={ [ 'image' ] }
						render={ ( { open } ) => (
							<Button variant="primary" icon={ addIcon } onClick={ open } className="gbb-mq-add-btn">
								{ __( 'Add Images', 'guten-builder-blocks' ) }
							</Button>
						) }
					/>
				</MediaUploadCheck>

				<div className="gbb-mq-url-input-container">
					<div className="gbb-mq-url-input-wrapper">
						<TextControl
							label={ <span>{__( 'Add Image by URL (SVG/PNG/JPG)', 'guten-builder-blocks' )}</span> }
							placeholder="https://example.com/logo.svg"
							value={ imageUrl }
							onChange={ setImageUrl }
							__nextHasNoMarginBottom={ true }
						/>
					</div>
					<Button variant="secondary" onClick={ addFromUrl } disabled={ !imageUrl }>
						{ __( 'Add', 'guten-builder-blocks' ) }
					</Button>
				</div>

				{ images.length > 0 && (
					<>
						<ToggleControl
							label={ __( 'Open links in New Tab', 'guten-builder-blocks' ) }
							checked={ openInNewTab }
							onChange={ ( val ) => setAttributes( { openInNewTab: val } ) }
							help={ __( 'N.B: Links will only be clickable on the live frontend.', 'guten-builder-blocks' ) }
						/>

						<hr />

						<div className="gbb-mq-images-list">
						{ images.map( ( img, i ) => (
							<div key={ i } className="gbb-mq-image-item">
								<div className="gbb-mq-image-item-header">
									{/* Image Preview */}
									<div className="gbb-mq-image-preview">
										<img src={ img.url } alt={ img.alt } />
									</div>

									{/* Action Buttons */}
									<div className="gbb-mq-image-actions">
										<Tooltip text={ __( 'Move Up', 'guten-builder-blocks' ) }>
											<Button isSmall variant="tertiary" icon={ arrowUpIcon } onClick={ () => moveImage( i, -1 ) } disabled={ i === 0 } />
										</Tooltip>
										<Tooltip text={ __( 'Move Down', 'guten-builder-blocks' ) }>
											<Button isSmall variant="tertiary" icon={ arrowDownIcon } onClick={ () => moveImage( i, 1 ) } disabled={ i === images.length - 1 } />
										</Tooltip>
										<Tooltip text={ __( 'Remove', 'guten-builder-blocks' ) }>
											<Button isSmall variant="tertiary" isDestructive icon={ trashIcon } onClick={ () => deleteImage( i ) } />
										</Tooltip>
									</div>
								</div>

								{/* URL and Link Inputs */}
								<div className="gbb-mq-image-inputs">
									<TextControl
										label={ <span>{__( 'Image Source URL', 'guten-builder-blocks' )}</span> }
										placeholder="https://..."
										value={ img.url }
										onChange={ ( val ) => updateImageUrl( i, val ) }
										__nextHasNoMarginBottom={ true }
									/>
									<TextControl
										label={ <span>{__( 'Destination Link', 'guten-builder-blocks' )}</span> }
										placeholder="https://..."
										value={ img.link }
										onChange={ ( val ) => updateLink( i, val ) }
										__nextHasNoMarginBottom={ true }
									/>
								</div>
							</div>
						) ) }
					</div>
					</>
				) }
			</PanelBody>

			<PanelBody title={ __( '📏 Dimensions & Layout', 'guten-builder-blocks' ) } initialOpen={ false }>
				<UnitControl
					label={ __( 'Container Max Width', 'guten-builder-blocks' ) }
					value={ containerMaxWidth }
					onChange={ ( val ) => setAttributes( { containerMaxWidth: val } ) }
				/>
				<div style={{ height: '12px' }} />
				<hr />
				<div style={{ height: '12px' }} />
				<UnitControl
					label={ __( 'Image Width', 'guten-builder-blocks' ) }
					value={ itemWidth }
					onChange={ ( val ) => setAttributes( { itemWidth: val } ) }
				/>
				<div style={{ height: '12px' }} />
				<UnitControl
					label={ __( 'Image Height', 'guten-builder-blocks' ) }
					value={ itemHeight }
					onChange={ ( val ) => setAttributes( { itemHeight: val } ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '⚙️ Movement & Engine', 'guten-builder-blocks' ) } initialOpen={ false }>
				<RangeControl
					label={ __( 'Base Speed (s)', 'guten-builder-blocks' ) }
					value={ speed }
					onChange={ ( val ) => setAttributes( { speed: val } ) }
					min={ 1 }
					max={ 200 }
					help={ __( 'Lower number means faster loop duration.', 'guten-builder-blocks' ) }
				/>
				<ToggleControl
					label={ __( 'Reverse Direction', 'guten-builder-blocks' ) }
					checked={ reverseDirection }
					onChange={ ( val ) => setAttributes( { reverseDirection: val } ) }
				/>
				<hr />
				<ToggleControl
					label={ __( 'Pause on Hover / Tap', 'guten-builder-blocks' ) }
					checked={ pauseOnHover }
					onChange={ ( val ) => {
						setAttributes( { pauseOnHover: val } );
						if ( val ) {
							setAttributes( { hoverSlowDown: false } );
						}
					} }
					help={ __( 'Completely stops the track when cursor is over it.', 'guten-builder-blocks' ) }
				/>
				<ToggleControl
					label={ __( 'Slow Down on Hover', 'guten-builder-blocks' ) }
					checked={ hoverSlowDown }
					onChange={ ( val ) => {
						setAttributes( { hoverSlowDown: val } );
						if ( val ) {
							setAttributes( { pauseOnHover: false } );
						}
					} }
					help={ __( 'Reduces velocity to 30% for a cinematic inspection feel.', 'guten-builder-blocks' ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '📱 Visibility Settings', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Hide on Mobile', 'guten-builder-blocks' ) }
					checked={ hideOnMobile }
					onChange={ ( val ) => setAttributes( { hideOnMobile: val } ) }
				/>
				<ToggleControl
					label={ __( 'Hide on Desktop', 'guten-builder-blocks' ) }
					checked={ hideOnDesktop }
					onChange={ ( val ) => setAttributes( { hideOnDesktop: val } ) }
				/>
			</PanelBody>
		</>
	);
};

export default General;
