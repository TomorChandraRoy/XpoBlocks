import { __ } from '@wordpress/i18n';
import { PanelBody} from '@wordpress/components';
import { BorderControl, SpacingControl, BackgroundControl, ColorControl, Typography } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
import { defaultLabelTypo, defaultTitleTypo, defaultArtistTypo } from '../../../../utils/options';

const Style = ( { attributes, setAttributes } ) => {
	const { playerBorder, playerBorderRadius, playerBg, labelColor, titleColor, artistColor, labelTypography, titleTypography, artistTypography, progressColor, progressBg, timeColor, controlColor } = attributes;



	return (
		<>
			<PanelBody className="bPlPanelBody" title={ __( 'Player', 'guten-builder-blocks' ) } initialOpen={ false }>
				<BackgroundControl
					label={__( 'Background :', 'guten-builder-blocks' )}
					value={playerBg}
					onChange={val => setAttributes({ playerBg: val })}
				/>

				<BorderControl
					label={ __( 'Border :', 'guten-builder-blocks' ) }
					value={ playerBorder }
					onChange={ ( val ) => setAttributes( { playerBorder: val } ) }
					defaultBorder={ {
						color: '#e5e7eb',
						width: '1px',
						style: 'solid',
						side: 'all'
					} }
				/>

				<SpacingControl
					label={__( 'Border Radius :', 'guten-builder-blocks' )}
					value={playerBorderRadius}
					onChange={val => setAttributes({ playerBorderRadius: val })}
					units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
					defaultVal={{ top: '16px', right: '16px', bottom: '16px', left: '16px' }}
				/>

			</PanelBody>

			<PanelBody className="bPlPanelBody" title={ __( 'Track Info', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Label Color :', 'guten-builder-blocks' )}
					value={labelColor}
					onChange={color => setAttributes({ labelColor: color })}
					defaultColor="#6b7280"
				/>

				<Typography
					label={__( 'Label Typography :', 'guten-builder-blocks' )}
					value={labelTypography}
					onChange={val => setAttributes({ labelTypography: val })}
					defaultTypography={defaultLabelTypo}
				/>

				<ColorControl
					label={__( 'Title Color :', 'guten-builder-blocks' )}
					value={titleColor}
					onChange={color => setAttributes({ titleColor: color })}
					defaultColor="#111827"
				/>

				<Typography
					label={__( 'Title Typography :', 'guten-builder-blocks' )}
					value={titleTypography}
					onChange={val => setAttributes({ titleTypography: val })}
					defaultTypography={defaultTitleTypo}
				/>

				<ColorControl
					label={__( 'Artist Color :', 'guten-builder-blocks' )}
					value={artistColor}
					onChange={color => setAttributes({ artistColor: color })}
					defaultColor="#6b7280"
				/>

				<Typography
					label={__( 'Artist Typography :', 'guten-builder-blocks' )}
					value={artistTypography}
					onChange={val => setAttributes({ artistTypography: val })}
					defaultTypography={defaultArtistTypo}
				/>
			</PanelBody>

			<PanelBody className="bPlPanelBody" title={ __( 'Progress Bar', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Progress Color :', 'guten-builder-blocks' )}
					value={progressColor}
					onChange={color => setAttributes({ progressColor: color })}
					defaultColor="#F62477"
				/>

				<ColorControl
					label={__( 'Progress Background :', 'guten-builder-blocks' )}
					value={progressBg}
					onChange={color => setAttributes({ progressBg: color })}
					defaultColor="#e5e7eb"
				/>

				<ColorControl
					label={__( 'Time Color :', 'guten-builder-blocks' )}
					value={timeColor}
					onChange={color => setAttributes({ timeColor: color })}
					defaultColor="#9ca3af"
				/>
			</PanelBody>

			<PanelBody className="bPlPanelBody" title={ __( 'Controls', 'guten-builder-blocks' ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Button Color :', 'guten-builder-blocks' )}
					value={controlColor}
					onChange={color => setAttributes({ controlColor: color })}
					defaultColor="#F62477"
				/>
			</PanelBody>
		</>
	);
};

export default Style;
