import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, SelectControl, RangeControl, TextControl } from '@wordpress/components';
import { MediaPlaceholder } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

const General = ({ attributes, setAttributes }) => {
	const {
		beforeImage,
		afterImage,
		initialOffset,
		aspectRatio,
		hoverZoom,
		showLabels,
		beforeLabel,
		afterLabel,
		clickToMove,
		autoPlayIntro,
		hideLabelsOnMove,
		hideOnMobile,
		hideOnDesktop
	} = attributes;

	return (
		<>
			<PanelBody title={ __( '🖼️ Images', 'guten-builder-blocks' ) } initialOpen={ true }>
				<p><strong>{ __( 'Before Image', 'guten-builder-blocks' ) }</strong></p>
				{ beforeImage?.url ? (
					<div style={ { marginBottom: '10px' } }>
						<img src={ beforeImage.url } style={ { maxHeight: '100px' } } alt="" />
						<br />
						<Button isLink isDestructive onClick={ () => setAttributes( { beforeImage: null } ) }>
							{ __( 'Remove', 'guten-builder-blocks' ) }
						</Button>
					</div>
				) : (
					<MediaPlaceholder
						accept="image/*"
						onSelect={ ( media ) => setAttributes( { beforeImage: { url: media.url, alt: media.alt } } ) }
						allowedTypes={ [ 'image' ] }
					/>
				) }

				<p><strong>{ __( 'After Image', 'guten-builder-blocks' ) }</strong></p>
				{ afterImage?.url ? (
					<div style={ { marginBottom: '10px' } }>
						<img src={ afterImage.url } style={ { maxHeight: '100px' } } alt="" />
						<br />
						<Button isLink isDestructive onClick={ () => setAttributes( { afterImage: null } ) }>
							{ __( 'Remove', 'guten-builder-blocks' ) }
						</Button>
					</div>
				) : (
					<MediaPlaceholder
						accept="image/*"
						onSelect={ ( media ) => setAttributes( { afterImage: { url: media.url, alt: media.alt } } ) }
						allowedTypes={ [ 'image' ] }
					/>
				) }

				<hr />

				<SelectControl
					label={ __( 'Image Ratio (Crop)', 'guten-builder-blocks' ) }
					value={ aspectRatio }
					options={ [
						{ label: __( 'Auto (Original)', 'guten-builder-blocks' ), value: 'auto' },
						{ label: __( '16:9 (Widescreen)', 'guten-builder-blocks' ), value: '16/9' },
						{ label: __( '1:1 (Square)', 'guten-builder-blocks' ), value: '1/1' },
						{ label: __( '4:3 (Standard)', 'guten-builder-blocks' ), value: '4/3' },
						{ label: __( '3:4 (Portrait)', 'guten-builder-blocks' ), value: '3/4' }
					] }
					onChange={ ( val ) => setAttributes( { aspectRatio: val } ) }
					help={ __( 'Forces both images to same height. Auto preserves original.', 'guten-builder-blocks' ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '🚀 Engine & Settings', 'guten-builder-blocks' ) } initialOpen={ false }>
				<RangeControl
					label={ __( 'Start Position (%)', 'guten-builder-blocks' ) }
					value={ initialOffset }
					onChange={ ( val ) => setAttributes( { initialOffset: val } ) }
					min={ 0 }
					max={ 100 }
				/>
				<ToggleControl
					label={ __( 'Enable Hover Zoom', 'guten-builder-blocks' ) }
					checked={ hoverZoom }
					onChange={ ( val ) => setAttributes( { hoverZoom: val } ) }
				/>
				<ToggleControl
					label={ __( 'Auto-Play Intro Animation', 'guten-builder-blocks' ) }
					checked={ autoPlayIntro }
					onChange={ ( val ) => setAttributes( { autoPlayIntro: val } ) }
				/>
				<ToggleControl
					label={ __( 'Click to Move', 'guten-builder-blocks' ) }
					checked={ clickToMove }
					onChange={ ( val ) => setAttributes( { clickToMove: val } ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '🏷️ Labels & Content', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ToggleControl
					label={ __( 'Show Labels', 'guten-builder-blocks' ) }
					checked={ showLabels }
					onChange={ ( val ) => setAttributes( { showLabels: val } ) }
				/>
				{ showLabels && (
					<>
						<TextControl
							label={ __( 'Before Label', 'guten-builder-blocks' ) }
							value={ beforeLabel }
							onChange={ ( val ) => setAttributes( { beforeLabel: val } ) }
						/>
						<TextControl
							label={ __( 'After Label', 'guten-builder-blocks' ) }
							value={ afterLabel }
							onChange={ ( val ) => setAttributes( { afterLabel: val } ) }
						/>
						<ToggleControl
							label={ __( 'Hide Labels While Moving', 'guten-builder-blocks' ) }
							checked={ hideLabelsOnMove }
							onChange={ ( val ) => setAttributes( { hideLabelsOnMove: val } ) }
						/>
					</>
				) }
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
