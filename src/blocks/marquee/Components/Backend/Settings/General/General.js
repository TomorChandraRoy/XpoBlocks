import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, RangeControl, TextControl, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

// Icons for reordering and deleting
const arrowUpIcon = (
	<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polyline points="18 15 12 9 6 15" />
	</svg>
);
const arrowDownIcon = (
	<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polyline points="6 9 12 15 18 9" />
	</svg>
);
const trashIcon = (
	<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<polyline points="3 6 5 6 21 6" />
		<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
	</svg>
);

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
			<PanelBody title={ __( '🖼️ Gallery & Links', 'guten-builder-blocks' ) } initialOpen={ true }>
				<MediaUploadCheck fallback={ <p style={ { color: '#ef4444', fontSize: '12px' } }>{ __( 'You do not have permission to upload media.', 'guten-builder-blocks' ) }</p> }>
					<MediaUpload
						multiple={ true }
						onSelect={ onSelectImages }
						allowedTypes={ [ 'image' ] }
						render={ ( { open } ) => (
							<Button variant="primary" onClick={ open } style={ { width: '100%', justifyContent: 'center', marginBottom: '15px' } }>
								{ __( '+ Add Images', 'guten-builder-blocks' ) }
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
					<div style={ { display: 'flex', flexDirection: 'column', gap: '10px' } }>
						{ images.map( ( img, i ) => (
							<div key={ i } style={ { background: '#f8fafc', padding: '10px', borderRadius: '6px', border: '1px solid #e2e8f0' } }>
								<div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' } }>
									<div style={ { width: '40px', height: '40px', background: '#fff', borderRadius: '4px', border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' } }>
										<img src={ img.url } style={ { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' } } alt={ img.alt } />
									</div>
									<div style={ { display: 'flex', gap: '4px' } }>
										<Button isSmall style={ { padding: '0 4px' } } icon={ arrowUpIcon } onClick={ () => moveImage( i, -1 ) } disabled={ i === 0 } />
										<Button isSmall style={ { padding: '0 4px' } } icon={ arrowDownIcon } onClick={ () => moveImage( i, 1 ) } disabled={ i === images.length - 1 } />
										<Button isSmall isDestructive style={ { padding: '0 4px' } } icon={ trashIcon } onClick={ () => deleteImage( i ) } />
									</div>
								</div>
								<TextControl
									label={ __( 'Destination Link', 'guten-builder-blocks' ) }
									placeholder="https://..."
									value={ img.link }
									onChange={ ( val ) => updateLink( i, val ) }
									__nextHasNoMarginBottom={ true }
								/>
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
