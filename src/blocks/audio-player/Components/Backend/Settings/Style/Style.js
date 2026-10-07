import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { BorderControl, SpacingControl, BackgroundControl, ColorControl, Typography } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
import { defaultLabelTypo, defaultTitleTypo, defaultArtistTypo } from '../../../../utils/options';
import { templateData } from '../../../../utils/data';
const Style = ( { attributes, setAttributes } ) => {
	const { playerBorder, playerBorderRadius, playerBg, labelColor, titleColor, artistColor, labelTypography, titleTypography, artistTypography, progressColor, progressBg, timeColor, controlColor, selectedTemplate = 'template-1' } = attributes;

	// যে টেমপ্লেট সিলেক্ট থাকবে, তার ডিফল্ট ডাটা data.js থেকে স্বয়ংক্রিয়ভাবে খুঁজে নিবে (Template 1, 2, 3, 4, 5...)
	const currentPreset = templateData.templates.find(t => t.id === selectedTemplate) || templateData.templates[0];
	const defaultValues = currentPreset?.attributes || {};

	const isTemplateTwo = selectedTemplate === 'template-2';

	return (
		<>
			<PanelBody className="bPlPanelBody" title={ __( 'Player', 'xpo-blocks' ) } initialOpen={ false }>
				<BackgroundControl
					label={__( 'Background :', 'xpo-blocks' )}
					value={playerBg}
					onChange={val => setAttributes({ playerBg: val })}
				/>

				<BorderControl
					label={ __( 'Border :', 'xpo-blocks' ) }
					value={ playerBorder }
					onChange={ ( val ) => setAttributes( { playerBorder: val } ) }
					defaultBorder={ defaultValues.playerBorder || {
						color: '#e5e7eb',
						width: '1px',
						style: 'solid',
						side: 'all'
					} }
				/>

				<SpacingControl
					label={__( 'Border Radius :', 'xpo-blocks' )}
					value={playerBorderRadius}
					onChange={val => setAttributes({ playerBorderRadius: val })}
					units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
					defaultVal={ defaultValues.playerBorderRadius || { top: '16px', right: '16px', bottom: '16px', left: '16px' } }
				/>

			</PanelBody>

			{!isTemplateTwo && (
				<PanelBody className="bPlPanelBody" title={ __( 'Track Info', 'xpo-blocks' ) } initialOpen={ false }>
					<ColorControl
						label={__( 'Label Color :', 'xpo-blocks' )}
						value={labelColor}
					onChange={color => setAttributes({ labelColor: color })}
					defaultColor="#6b7280"
				/>

				<Typography
					label={__( 'Label Typography :', 'xpo-blocks' )}
					value={labelTypography}
					onChange={val => setAttributes({ labelTypography: val })}
					defaultTypography={defaultLabelTypo}
				/>

				<ColorControl
					label={__( 'Title Color :', 'xpo-blocks' )}
					value={titleColor}
					onChange={color => setAttributes({ titleColor: color })}
					defaultColor="#111827"
				/>

				<Typography
					label={__( 'Title Typography :', 'xpo-blocks' )}
					value={titleTypography}
					onChange={val => setAttributes({ titleTypography: val })}
					defaultTypography={defaultTitleTypo}
				/>

				<ColorControl
					label={__( 'Artist Color :', 'xpo-blocks' )}
					value={artistColor}
					onChange={color => setAttributes({ artistColor: color })}
					defaultColor="#6b7280"
				/>

				<Typography
					label={__( 'Artist Typography :', 'xpo-blocks' )}
					value={artistTypography}
					onChange={val => setAttributes({ artistTypography: val })}
					defaultTypography={defaultArtistTypo}
				/>
			</PanelBody>
			)}

			<PanelBody className="bPlPanelBody" title={ __( 'Progress Bar', 'xpo-blocks' ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Progress Color :', 'xpo-blocks' )}
					value={progressColor}
					onChange={color => setAttributes({ progressColor: color })}
					defaultColor={defaultValues.progressColor || "#F62477"}
				/>

				<ColorControl
					label={__( 'Progress Background :', 'xpo-blocks' )}
					value={progressBg}
					onChange={color => setAttributes({ progressBg: color })}
					defaultColor={defaultValues.progressBg || "#e5e7eb"}
				/>

				<ColorControl
					label={__( 'Time Color :', 'xpo-blocks' )}
					value={timeColor}
					onChange={color => setAttributes({ timeColor: color })}
					defaultColor={defaultValues.timeColor || "#9ca3af"}
				/>
			</PanelBody>

			<PanelBody className="bPlPanelBody" title={ __( 'Controls', 'xpo-blocks' ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Button Color :', 'xpo-blocks' )}
					value={controlColor}
					onChange={color => setAttributes({ controlColor: color })}
					defaultColor={defaultValues.controlColor || "#F62477"}
				/>
			</PanelBody>
		</>
	);
};

export default Style;
