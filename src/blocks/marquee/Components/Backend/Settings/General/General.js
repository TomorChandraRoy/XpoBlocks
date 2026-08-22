import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl, TextControl, Button, Tooltip } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { addIcon, arrowDownIcon, arrowUpIcon, trashIcon } from '../../../../utils/icons';


const General = ({ attributes, setAttributes }) => {
	const {
		images,
		speed,
		reverseDirection,
		pauseOnHover,
		hoverSlowDown,
		openInNewTab,
		hideOnMobile,
		hideOnDesktop
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
				<MediaUploadCheck fallback={ <p style={ { color: '#ef4444', fontSize: '12px' } }>{ __( 'You do not have permission to upload media.', 'guten-builder-blocks' ) }</p> }>
					<MediaUpload
						multiple={ true }
						onSelect={ onSelectImages }
						allowedTypes={ [ 'image' ] }
						render={ ( { open } ) => (
							<Button variant="primary" icon={ addIcon } onClick={ open } style={ { width: '100%', justifyContent: 'center', marginBottom: '15px', backgroundColor: '#F62477', borderColor: '#F62477', color: '#fff' } }>
								{ __( 'Add Images', 'guten-builder-blocks' ) }
							</Button>
						) }
					/>
				</MediaUploadCheck>

				<ToggleControl
					label={ __( 'Open links in New Tab', 'guten-builder-blocks' ) }
					checked={ openInNewTab }
					onChange={ ( val ) => setAttributes( { openInNewTab: val } ) }
				/>

				<hr />

				{ images.length > 0 && (
					<div style={ { display: 'flex', flexDirection: 'column', gap: '12px' } }>
						{ images.map( ( img, i ) => (
							<div key={ i } style={ { background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(15, 23, 42, 0.06)', transition: 'border-color 0.2s' } }>
								<div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', marginBottom: '12px' } }>
									{/* Image Preview */}
									<div style={ { width: '48px', height: '48px', flexShrink: 0, background: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '4px' } }>
										<img src={ img.url } style={ { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } } alt={ img.alt } />
									</div>

									{/* Action Buttons */}
									<div style={ { display: 'flex', gap: '4px', background: '#f8fafc', padding: '4px', borderRadius: '6px', border: '1px solid #e2e8f0' } }>
										<Tooltip text={ __( 'Move Up', 'guten-builder-blocks' ) }>
											<Button isSmall variant="tertiary" style={ { minWidth: '32px', padding: '0', color: '#64748b' } } icon={ arrowUpIcon } onClick={ () => moveImage( i, -1 ) } disabled={ i === 0 } />
										</Tooltip>
										<Tooltip text={ __( 'Move Down', 'guten-builder-blocks' ) }>
											<Button isSmall variant="tertiary" style={ { minWidth: '32px', padding: '0', color: '#64748b' } } icon={ arrowDownIcon } onClick={ () => moveImage( i, 1 ) } disabled={ i === images.length - 1 } />
										</Tooltip>
										<Tooltip text={ __( 'Remove', 'guten-builder-blocks' ) }>
											<Button isSmall variant="tertiary" isDestructive style={ { minWidth: '32px', padding: '0' } } icon={ trashIcon } onClick={ () => deleteImage( i ) } />
										</Tooltip>
									</div>
								</div>

								{/* Link Input */}
								<div style={{ background: '#f8fafc', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
									<TextControl
										label={ <span style={{ fontSize: '12px', fontWeight: 500, color: '#64748b' }}>{__( 'Destination Link', 'guten-builder-blocks' )}</span> }
										placeholder="https://..."
										value={ img.link }
										onChange={ ( val ) => updateLink( i, val ) }
										__nextHasNoMarginBottom={ true }
										style={{ background: '#ffffff' }}
									/>
								</div>
							</div>
						) ) }
					</div>
				) }
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
