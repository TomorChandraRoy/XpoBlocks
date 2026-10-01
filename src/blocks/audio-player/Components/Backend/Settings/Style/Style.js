import { __ } from '@wordpress/i18n';
import { PanelBody} from '@wordpress/components';
import { BorderControl, SpacingControl, BackgroundControl, ColorControl, Typography } from 'tr-tools';
import { pxUnit, remUnit, emUnit, vwUnit, perUnit } from 'tr-tools/utils/options';
import { defaultLabelTypo, defaultTitleTypo, defaultArtistTypo } from '../../../../utils/options';
const textDomain = 'xpo-blocks';


const Style = ( { attributes, setAttributes } ) => {
	const { playerBorder, playerBorderRadius, playerBg, labelColor, titleColor, artistColor, labelTypography, titleTypography, artistTypography, progressColor, progressBg, timeColor, controlColor } = attributes;



	return (
		<>
			<PanelBody className="bPlPanelBody" title={ __( 'Player',textDomain ) } initialOpen={ false }>
				<BackgroundControl
					label={__( 'Background :',textDomain )}
					value={playerBg}
					onChange={val => setAttributes({ playerBg: val })}
				/>

				<BorderControl
					label={ __( 'Border :',  ) }
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
					label={__( 'Border Radius :',  )}
					value={playerBorderRadius}
					onChange={val => setAttributes({ playerBorderRadius: val })}
					units={[pxUnit(), remUnit(), emUnit(), vwUnit(), perUnit()]}
					defaultVal={{ top: '16px', right: '16px', bottom: '16px', left: '16px' }}
				/>

			</PanelBody>

			<PanelBody className="bPlPanelBody" title={ __( 'Track Info',  ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Label Color :',  )}
					value={labelColor}
					onChange={color => setAttributes({ labelColor: color })}
					defaultColor="#6b7280"
				/>

				<Typography
					label={__( 'Label Typography :',  )}
					value={labelTypography}
					onChange={val => setAttributes({ labelTypography: val })}
					defaultTypography={defaultLabelTypo}
				/>

				<ColorControl
					label={__( 'Title Color :',  )}
					value={titleColor}
					onChange={color => setAttributes({ titleColor: color })}
					defaultColor="#111827"
				/>

				<Typography
					label={__( 'Title Typography :',  )}
					value={titleTypography}
					onChange={val => setAttributes({ titleTypography: val })}
					defaultTypography={defaultTitleTypo}
				/>

				<ColorControl
					label={__( 'Artist Color :',  )}
					value={artistColor}
					onChange={color => setAttributes({ artistColor: color })}
					defaultColor="#6b7280"
				/>

				<Typography
					label={__( 'Artist Typography :',  )}
					value={artistTypography}
					onChange={val => setAttributes({ artistTypography: val })}
					defaultTypography={defaultArtistTypo}
				/>
			</PanelBody>

			<PanelBody className="bPlPanelBody" title={ __( 'Progress Bar',  ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Progress Color :',  )}
					value={progressColor}
					onChange={color => setAttributes({ progressColor: color })}
					defaultColor="#F62477"
				/>

				<ColorControl
					label={__( 'Progress Background :',  )}
					value={progressBg}
					onChange={color => setAttributes({ progressBg: color })}
					defaultColor="#e5e7eb"
				/>

				<ColorControl
					label={__( 'Time Color :',  )}
					value={timeColor}
					onChange={color => setAttributes({ timeColor: color })}
					defaultColor="#9ca3af"
				/>
			</PanelBody>

			<PanelBody className="bPlPanelBody" title={ __( 'Controls',  ) } initialOpen={ false }>
				<ColorControl
					label={__( 'Button Color :',  )}
					value={controlColor}
					onChange={color => setAttributes({ controlColor: color })}
					defaultColor="#F62477"
				/>
			</PanelBody>
		</>
	);
};

export default Style;
