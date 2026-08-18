import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, TextControl, Button } from '@wordpress/components';
import { MediaPlaceholder, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';

const General = ({ attributes, setAttributes, clientId }) => {
	const {
		blockId,
		audioUrl,
		coverUrl,
		playerLayout,
		compactSize,
		preloadStrategy,
		showWaveform,
		enableSeekbar,
		enableVolume,
		timeDisplayMode,
		align,
		hideOnMobile,
		hideOnDesktop,
		entranceAnimation,
		entranceDelay,
		text,
		subtitle,
		labelText
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
			<PanelBody title={__('Template Presets', 'guten-builder-blocks')} initialOpen={true}>
				<p style={{ fontSize: '12px', color: '#64748b', marginBottom: '12px' }}>{__('Switch or apply a predefined audio player template style.', 'guten-builder-blocks')}</p>
				<Button isSecondary onClick={() => setAttributes({ selectedTemplate: '' })} style={{ width: '100%', justifyContent: 'center' }}>
					{__('Change Template', 'guten-builder-blocks')}
				</Button>
			</PanelBody>

			<PanelBody title={ __( '🎧 Audio Source & Media', 'guten-builder-blocks' ) } initialOpen={ false }>
				{ audioUrl ? (
					<div style={ { marginBottom: '15px' } }>
						<TextControl
							label={ __( 'Audio URL', 'guten-builder-blocks' ) }
							value={ audioUrl }
							onChange={ ( val ) => setAttributes( { audioUrl: val } ) }
						/>
						<Button variant="secondary" isDestructive onClick={ () => setAttributes( { audioUrl: '' } ) } style={ { width: '100%', justifyContent: 'center' } }>
							{ __( 'Remove Audio', 'guten-builder-blocks' ) }
						</Button>
					</div>
				) : (
					<MediaPlaceholder
						accept="audio/*"
						allowedTypes={ [ 'audio' ] }
						multiple={ false }
						labels={ {
							title: __( 'Audio Source', 'guten-builder-blocks' ),
							instructions: __( 'Upload an audio file or pick one from the library.', 'guten-builder-blocks' )
						} }
						onSelect={ ( media ) => {
							if ( media && media.url ) {
								setAttributes( { audioUrl: media.url } );
							}
						} }
					/>
				) }

				<hr />

				<MediaUploadCheck>
					<MediaUpload
						onSelect={ ( media ) => setAttributes( { coverUrl: media.url } ) }
						allowedTypes={ [ 'image' ] }
						value={ coverUrl }
						render={ ( { open } ) => (
							<Button variant="secondary" onClick={ open } style={ { width: '100%', justifyContent: 'center' } }>
								{ coverUrl ? __( 'Change Cover Image', 'guten-builder-blocks' ) : __( 'Add Cover Image', 'guten-builder-blocks' ) }
							</Button>
						) }
					/>
				</MediaUploadCheck>

				{ coverUrl && (
					<Button variant="link" isDestructive onClick={ () => setAttributes( { coverUrl: '' } ) } style={ { marginTop: '5px' } }>
						{ __( 'Remove Image', 'guten-builder-blocks' ) }
					</Button>
				) }

				<div style={ { marginTop: '20px' } }>
					<TextControl
						label={ __( 'Label Text', 'guten-builder-blocks' ) }
						value={ labelText }
						onChange={ ( val ) => setAttributes( { labelText: val } ) }
					/>
					<TextControl
						label={ __( 'Track Title', 'guten-builder-blocks' ) }
						value={ text }
						onChange={ ( val ) => setAttributes( { text: val } ) }
					/>
					<TextControl
						label={ __( 'Artist / Author', 'guten-builder-blocks' ) }
						value={ subtitle }
						onChange={ ( val ) => setAttributes( { subtitle: val } ) }
					/>
				</div>

				<div style={ { marginTop: '20px' } }>
					<SelectControl
						label={ __( 'Preload Strategy', 'guten-builder-blocks' ) }
						value={ preloadStrategy }
						options={ [
							{ label: __( 'Metadata Only (Recommended)', 'guten-builder-blocks' ), value: 'metadata' },
							{ label: __( 'Auto (Load full file)', 'guten-builder-blocks' ), value: 'auto' },
							{ label: __( 'None (Do not load)', 'guten-builder-blocks' ), value: 'none' }
						] }
						onChange={ ( val ) => setAttributes( { preloadStrategy: val } ) }
						help={ __( 'Controls how much of the file the browser downloads automatically.', 'guten-builder-blocks' ) }
					/>
				</div>
			</PanelBody>

			<PanelBody title={ __( '⚙️ Layout & Position', 'guten-builder-blocks' ) } initialOpen={ false }>
				<SelectControl
					label={ __( 'Player Style', 'guten-builder-blocks' ) }
					value={ playerLayout }
					options={ [
						{ label: __( 'Standard (Extended)', 'guten-builder-blocks' ), value: 'extended' },
						{ label: __( 'Compact (Circle)', 'guten-builder-blocks' ), value: 'compact' }
					] }
					onChange={ ( val ) => setAttributes( { playerLayout: val } ) }
					help={ __( 'Extended bar or compact circle.', 'guten-builder-blocks' ) }
				/>

				{ isCompact && (
					<RangeControl
						label={ __( 'Circle Size (px)', 'guten-builder-blocks' ) }
						value={ compactSize }
						onChange={ ( val ) => setAttributes( { compactSize: val } ) }
						min={ 60 }
						max={ 300 }
						step={ 5 }
						help={ __( 'Diameter of the circle player.', 'guten-builder-blocks' ) }
					/>
				) }

				<SelectControl
					label={ __( 'Block Alignment', 'guten-builder-blocks' ) }
					value={ align }
					options={ [
						{ label: __( 'Left', 'guten-builder-blocks' ), value: 'flex-start' },
						{ label: __( 'Center', 'guten-builder-blocks' ), value: 'center' },
						{ label: __( 'Right', 'guten-builder-blocks' ), value: 'flex-end' }
					] }
					onChange={ ( val ) => setAttributes( { align: val } ) }
					help={ __( 'Player position in the container.', 'guten-builder-blocks' ) }
				/>

				{ ! isCompact && (
					<SelectControl
						label={ __( 'Time Display Mode', 'guten-builder-blocks' ) }
						value={ timeDisplayMode }
						options={ [
							{ label: __( 'Hidden', 'guten-builder-blocks' ), value: 'none' },
							{ label: __( 'Elapsed Time', 'guten-builder-blocks' ), value: 'elapsed' },
							{ label: __( 'Remaining Time', 'guten-builder-blocks' ), value: 'remaining' },
							{ label: __( 'Total Duration', 'guten-builder-blocks' ), value: 'total' }
						] }
						onChange={ ( val ) => setAttributes( { timeDisplayMode: val } ) }
						help={ __( 'Shows current, remaining, or total play times.', 'guten-builder-blocks' ) }
					/>
				) }
			</PanelBody>

			<PanelBody title={ __( '🧠 Engine Settings', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Show Animated Waveform', 'guten-builder-blocks' ) }
					checked={ showWaveform }
					onChange={ ( val ) => setAttributes( { showWaveform: val } ) }
					help={ __( 'Animated bars synced to audio.', 'guten-builder-blocks' ) }
				/>
				<ToggleControl
					label={ __( 'Enable Interactive Seekbar', 'guten-builder-blocks' ) }
					checked={ enableSeekbar }
					onChange={ ( val ) => setAttributes( { enableSeekbar: val } ) }
					help={ __( 'Click to jump to any position.', 'guten-builder-blocks' ) }
				/>
				{ ! isCompact && (
					<ToggleControl
						label={ __( 'Show Volume Control', 'guten-builder-blocks' ) }
						checked={ enableVolume }
						onChange={ ( val ) => setAttributes( { enableVolume: val } ) }
						help={ __( 'Volume button and slider.', 'guten-builder-blocks' ) }
					/>
				) }
			</PanelBody>

			<PanelBody title={ __( '📱 Visibility & Entrance', 'guten-builder-blocks' ) } initialOpen={ false }>
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
				<hr />
				<SelectControl
					label={ __( 'Entrance Animation', 'guten-builder-blocks' ) }
					value={ entranceAnimation }
					options={ [
						{ label: __( 'None', 'guten-builder-blocks' ), value: 'none' },
						{ label: __( 'Fade In', 'guten-builder-blocks' ), value: 'fade' },
						{ label: __( 'Slide Up', 'guten-builder-blocks' ), value: 'slide' },
						{ label: __( 'Zoom In', 'guten-builder-blocks' ), value: 'zoom' }
					] }
					onChange={ ( val ) => setAttributes( { entranceAnimation: val } ) }
				/>
				<RangeControl
					label={ __( 'Animation Delay (s)', 'guten-builder-blocks' ) }
					value={ entranceDelay }
					onChange={ ( val ) => setAttributes( { entranceDelay: val } ) }
					min={ 0 }
					max={ 2 }
					step={ 0.1 }
					help={ __( 'Delays the entrance animation on page load.', 'guten-builder-blocks' ) }
				/>
			</PanelBody>
		</>
	);
};

export default General;
