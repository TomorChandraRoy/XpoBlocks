import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl } from '@wordpress/components';
import { CustomColorPicker } from '../../../../utils/functions';

const Style = ( { attributes, setAttributes } ) => {
	const {
		headerBgColor,
		headerTextColor,
		activeHeaderBgColor,
		activeHeaderTextColor,
		contentBgColor,
		contentTextColor,
		borderColor,
		activeBorderColor,
		iconColor,
		activeIconColor,
		borderRadius,
		borderWidth,
		gap,
		titleFontSize,
		contentFontSize
	} = attributes;

	return (
		<>
			<PanelBody title={ __( '🎨 Header Color & Style', 'guten-builder-blocks' ) } initialOpen={ true }>
				<CustomColorPicker label={ __( 'Header Background', 'guten-builder-blocks' ) } value={ headerBgColor } onChange={ ( val ) => setAttributes( { headerBgColor: val } ) } marginTop="0" defaultVal="#ffffff" />
				<CustomColorPicker label={ __( 'Header Text', 'guten-builder-blocks' ) } value={ headerTextColor } onChange={ ( val ) => setAttributes( { headerTextColor: val } ) } defaultVal="#1e293b" />
				<CustomColorPicker label={ __( 'Active Header Background', 'guten-builder-blocks' ) } value={ activeHeaderBgColor } onChange={ ( val ) => setAttributes( { activeHeaderBgColor: val } ) } defaultVal="#f8fafc" />
				<CustomColorPicker label={ __( 'Active Header Text', 'guten-builder-blocks' ) } value={ activeHeaderTextColor } onChange={ ( val ) => setAttributes( { activeHeaderTextColor: val } ) } defaultVal="#0f172a" />
			</PanelBody>

			<PanelBody title={ __( '📄 Content Color & Style', 'guten-builder-blocks' ) } initialOpen={ false }>
				<CustomColorPicker label={ __( 'Content Background', 'guten-builder-blocks' ) } value={ contentBgColor } onChange={ ( val ) => setAttributes( { contentBgColor: val } ) } marginTop="0" defaultVal="#ffffff" />
				<CustomColorPicker label={ __( 'Content Text', 'guten-builder-blocks' ) } value={ contentTextColor } onChange={ ( val ) => setAttributes( { contentTextColor: val } ) } defaultVal="#475569" />
			</PanelBody>

			<PanelBody title={ __( '✏️ Border & Icon Styling', 'guten-builder-blocks' ) } initialOpen={ false }>
				<CustomColorPicker label={ __( 'Border Color', 'guten-builder-blocks' ) } value={ borderColor } onChange={ ( val ) => setAttributes( { borderColor: val } ) } marginTop="0" defaultVal="#e2e8f0" />
				<CustomColorPicker label={ __( 'Active Border Color', 'guten-builder-blocks' ) } value={ activeBorderColor } onChange={ ( val ) => setAttributes( { activeBorderColor: val } ) } defaultVal="#cbd5e1" />
				<CustomColorPicker label={ __( 'Icon Color', 'guten-builder-blocks' ) } value={ iconColor } onChange={ ( val ) => setAttributes( { iconColor: val } ) } defaultVal="#64748b" />
				<CustomColorPicker label={ __( 'Active Icon Color', 'guten-builder-blocks' ) } value={ activeIconColor } onChange={ ( val ) => setAttributes( { activeIconColor: val } ) } defaultVal="#0f172a" />

				<hr />

				<RangeControl
					label={ __( 'Border Radius (px)', 'guten-builder-blocks' ) }
					value={ borderRadius }
					onChange={ ( val ) => setAttributes( { borderRadius: val } ) }
					min={ 0 }
					max={ 30 }
				/>

				<RangeControl
					label={ __( 'Border Width (px)', 'guten-builder-blocks' ) }
					value={ borderWidth }
					onChange={ ( val ) => setAttributes( { borderWidth: val } ) }
					min={ 0 }
					max={ 10 }
				/>

				<RangeControl
					label={ __( 'Spacing Between Items (px)', 'guten-builder-blocks' ) }
					value={ gap }
					onChange={ ( val ) => setAttributes( { gap: val } ) }
					min={ 0 }
					max={ 40 }
				/>
			</PanelBody>

			<PanelBody title={ __( '🔤 Typography Settings', 'guten-builder-blocks' ) } initialOpen={ false }>
				<RangeControl
					label={ __( 'Header Title Size (px)', 'guten-builder-blocks' ) }
					value={ titleFontSize }
					onChange={ ( val ) => setAttributes( { titleFontSize: val } ) }
					min={ 12 }
					max={ 36 }
				/>

				<RangeControl
					label={ __( 'Content Text Size (px)', 'guten-builder-blocks' ) }
					value={ contentFontSize }
					onChange={ ( val ) => setAttributes( { contentFontSize: val } ) }
					min={ 10 }
					max={ 24 }
				/>
			</PanelBody>
		</>
	);
};

export default Style;
