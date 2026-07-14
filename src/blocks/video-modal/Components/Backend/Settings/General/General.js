import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, TextControl, RangeControl, Button } from '@wordpress/components';
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

const General = ({ attributes, setAttributes }) => {
	const {
		videoUrl,
		autoExtractCover,
		playbackMode,
		coverImage,
		imageOverlayOpacity,
		aspectRatio,
		preloadLocalVideo,
		dialogAriaLabel,
		playButtonAriaLabel,
		closeButtonAriaLabel
	} = attributes;

	return (
		<>
			<PanelBody title={ __( '📺 Video Source', 'guten-builder-blocks' ) } initialOpen={ true }>
				<TextControl
					label={ __( 'Video URL', 'guten-builder-blocks' ) }
					value={ videoUrl }
					onChange={ ( val ) => setAttributes( { videoUrl: val } ) }
					help={ __( 'Supports YouTube, Vimeo, and direct MP4/WebM/OGG video URLs.', 'guten-builder-blocks' ) }
				/>
				<SelectControl
					label={ __( 'Playback Mode', 'guten-builder-blocks' ) }
					value={ playbackMode }
					options={ [
						{ label: __( 'Open in Fullscreen Modal', 'guten-builder-blocks' ), value: 'modal' },
						{ label: __( 'Play Inline (Replaces Image)', 'guten-builder-blocks' ), value: 'inline' }
					] }
					onChange={ ( val ) => setAttributes( { playbackMode: val } ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '🖼️ Cover Image', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Auto-Extract Cover (YouTube)', 'guten-builder-blocks' ) }
					checked={ !!autoExtractCover }
					onChange={ ( val ) => setAttributes( { autoExtractCover: val } ) }
					help={ __( 'Attempts to fetch the max-res thumbnail if no custom cover is uploaded.', 'guten-builder-blocks' ) }
				/>

				<div style={ { marginBottom: '20px' } }>
					<p style={ { fontWeight: 'bold', fontSize: '13px', marginBottom: '8px' } }>{ __( 'Custom Cover Image', 'guten-builder-blocks' ) }</p>
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ ( media ) => {
								if ( media && media.url ) {
									setAttributes( { coverImage: { url: media.url, alt: media.alt || '' } } );
								}
							} }
							allowedTypes={ [ 'image' ] }
							value={ coverImage?.url || '' }
							render={ ( { open } ) => (
								<div style={ { display: 'flex', gap: '10px', alignItems: 'center' } }>
									<Button variant="secondary" onClick={ open }>
										{ coverImage?.url ? __( 'Replace Image', 'guten-builder-blocks' ) : __( 'Upload Cover', 'guten-builder-blocks' ) }
									</Button>
									{ coverImage?.url && (
										<Button isDestructive variant="link" onClick={ () => setAttributes( { coverImage: null } ) }>
											{ __( 'Remove', 'guten-builder-blocks' ) }
										</Button>
									) }
								</div>
							) }
						/>
					</MediaUploadCheck>
				</div>

				<RangeControl
					label={ __( 'Dark Overlay Opacity', 'guten-builder-blocks' ) }
					value={ imageOverlayOpacity }
					onChange={ ( val ) => setAttributes( { imageOverlayOpacity: val } ) }
					min={ 0 }
					max={ 1 }
					step={ 0.1 }
				/>

				<SelectControl
					label={ __( 'Aspect Ratio', 'guten-builder-blocks' ) }
					value={ aspectRatio }
					options={ [
						{ label: __( '16:9 (Standard Video)', 'guten-builder-blocks' ), value: '16x9' },
						{ label: __( '4:3 (Classic)', 'guten-builder-blocks' ), value: '4x3' },
						{ label: __( '21:9 (Cinematic)', 'guten-builder-blocks' ), value: '21x9' },
						{ label: __( '1:1 (Square)', 'guten-builder-blocks' ), value: '1x1' }
					] }
					onChange={ ( val ) => setAttributes( { aspectRatio: val } ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '♿ A11y & Preload', 'guten-builder-blocks' ) } initialOpen={ false }>
				<SelectControl
					label={ __( 'Local Video Preload', 'guten-builder-blocks' ) }
					value={ preloadLocalVideo }
					options={ [
						{ label: __( 'Metadata Only (Recommended)', 'guten-builder-blocks' ), value: 'metadata' },
						{ label: __( 'None', 'guten-builder-blocks' ), value: 'none' },
						{ label: __( 'Auto', 'guten-builder-blocks' ), value: 'auto' }
					] }
					onChange={ ( val ) => setAttributes( { preloadLocalVideo: val } ) }
				/>
				<TextControl
					label={ __( 'Dialog Aria Label', 'guten-builder-blocks' ) }
					value={ dialogAriaLabel }
					onChange={ ( val ) => setAttributes( { dialogAriaLabel: val } ) }
				/>
				<TextControl
					label={ __( 'Play Button Aria Label', 'guten-builder-blocks' ) }
					value={ playButtonAriaLabel }
					onChange={ ( val ) => setAttributes( { playButtonAriaLabel: val } ) }
				/>
				<TextControl
					label={ __( 'Close Button Aria Label', 'guten-builder-blocks' ) }
					value={ closeButtonAriaLabel }
					onChange={ ( val ) => setAttributes( { closeButtonAriaLabel: val } ) }
				/>
			</PanelBody>
		</>
	);
};

export default General;
