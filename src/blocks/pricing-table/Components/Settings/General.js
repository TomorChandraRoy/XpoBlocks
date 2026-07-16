import { __ } from '@wordpress/i18n';
import { PanelBody, RangeControl, SelectControl, Button, TextControl, ToggleControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';

const General = ({ attributes, setAttributes, clientId }) => {
	const {
		blockId,
		pricingTables = [],
		columns,
		columnGap
	} = attributes;

	const prevClientId = useRef( clientId );

	useEffect( () => {
		const clientChanged = prevClientId.current !== clientId;
		if ( ! blockId || clientChanged ) {
			const uuid = window.crypto && crypto.randomUUID 
				? crypto.randomUUID().split( '-' )[ 0 ] 
				: Math.random().toString( 36 ).substring( 2, 9 );
			setAttributes( { blockId: `gbb-price-${ uuid }` } );
			prevClientId.current = clientId;
		}
	}, [ blockId, clientId, setAttributes ] );

	const updateTable = ( index, key, value ) => {
		const newTables = [ ...pricingTables ];
		newTables[ index ] = { ...newTables[ index ], [ key ]: value };
		setAttributes( { pricingTables: newTables } );
	};

	const addTable = () => {
		const templateFeatures = pricingTables.length > 0 && pricingTables[0].features 
			? pricingTables[0].features.map(f => ({ label: f.label, isEnable: true }))
			: [
				{ label: __( 'Everything in Starter', 'guten-builder-blocks' ), isEnable: true },
				{ label: __( 'Advanced Customization', 'guten-builder-blocks' ), isEnable: true }
			];

		const newTables = [
			...pricingTables,
			{
				name: __( 'Premium Plan', 'guten-builder-blocks' ),
				price: '49',
				priceCurrency: '$',
				period: 'mo',
				link: '#',
				linkLabel: __( 'Buy Now', 'guten-builder-blocks' ),
				color: '#ec4899',
				isFeatured: false,
				badgeText: '',
				features: templateFeatures
			}
		];
		setAttributes( { pricingTables: newTables } );
	};

	const deleteTable = ( index ) => {
		const newTables = pricingTables.filter( ( _, i ) => i !== index );
		setAttributes( { pricingTables: newTables } );
	};

	const updateFeature = ( tableIndex, featureIndex, key, value ) => {
		let newTables = [ ...pricingTables ];
		
		if ( key === 'label' ) {
			newTables = newTables.map( t => {
				const features = [ ...(t.features || []) ];
				if ( features[ featureIndex ] ) {
					features[ featureIndex ] = { ...features[ featureIndex ], label: value };
				}
				return { ...t, features };
			});
		} else {
			const features = [ ...newTables[ tableIndex ].features ];
			features[ featureIndex ] = { ...features[ featureIndex ], [ key ]: value };
			newTables[ tableIndex ] = { ...newTables[ tableIndex ], features };
		}
		
		setAttributes( { pricingTables: newTables } );
	};

	const addFeature = ( tableIndex ) => {
		const newTables = pricingTables.map( t => ({
			...t,
			features: [
				...(t.features || []),
				{ label: __( 'New Feature Item', 'guten-builder-blocks' ), isEnable: true }
			]
		}) );
		setAttributes( { pricingTables: newTables } );
	};

	const deleteFeature = ( tableIndex, featureIndex ) => {
		const newTables = pricingTables.map( t => ({
			...t,
			features: (t.features || []).filter( ( _, i ) => i !== featureIndex )
		}) );
		setAttributes( { pricingTables: newTables } );
	};

	return (
		<>
			<PanelBody title={ __( '⚙️ Grid Layout', 'guten-builder-blocks' ) } initialOpen={ true }>
				<SelectControl
					label={ __( 'Theme Style', 'guten-builder-blocks' ) }
					value={ attributes.themeStyle || 'style-1' }
					options={ [
						{ label: __( 'Style 1 (Default)', 'guten-builder-blocks' ), value: 'style-1' },
						{ label: __( 'Style 2 (Dark Hover)', 'guten-builder-blocks' ), value: 'style-2' },
					] }
					onChange={ ( val ) => setAttributes( { themeStyle: val } ) }
				/>
				<SelectControl
					label={ __( 'Columns (Desktop)', 'guten-builder-blocks' ) }
					value={ columns }
					options={ [
						{ label: '1', value: 1 },
						{ label: '2', value: 2 },
						{ label: '3', value: 3 },
						{ label: '4', value: 4 }
					] }
					onChange={ ( val ) => setAttributes( { columns: parseInt( val ) } ) }
				/>

				<RangeControl
					label={ __( 'Column Gap (px)', 'guten-builder-blocks' ) }
					value={ columnGap }
					onChange={ ( val ) => setAttributes( { columnGap: val } ) }
					min={ 10 }
					max={ 50 }
				/>
			</PanelBody>

			<PanelBody title={ __( '💰 Plans & Pricing Cards', 'guten-builder-blocks' ) } initialOpen={ true }>
				{ pricingTables.map( ( table, tableIndex ) => (
					<div
						key={ tableIndex }
						style={ {
							background: '#f8fafc',
							border: '1px solid #e2e8f0',
							borderRadius: '8px',
							padding: '16px',
							marginBottom: '16px',
							position: 'relative'
						} }
					>
						<div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' } }>
							<span style={ { fontWeight: 'bold', fontSize: '13px', color: '#334155' } }>
								{ __( 'Plan #', 'guten-builder-blocks' ) } { tableIndex + 1 } ({ table.name })
							</span>
							<Button
								isDestructive
								variant="link"
								onClick={ () => deleteTable( tableIndex ) }
								style={ { padding: 0, height: 'auto', minWidth: 'auto' } }
							>
								{ __( 'Remove Plan', 'guten-builder-blocks' ) }
							</Button>
						</div>

						<TextControl
							label={ __( 'Plan Name', 'guten-builder-blocks' ) }
							value={ table.name }
							onChange={ ( val ) => updateTable( tableIndex, 'name', val ) }
						/>

						<div style={ { display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '8px' } }>
							<TextControl
								label={ __( 'Currency', 'guten-builder-blocks' ) }
								value={ table.priceCurrency }
								onChange={ ( val ) => updateTable( tableIndex, 'priceCurrency', val ) }
							/>
							<TextControl
								label={ __( 'Price', 'guten-builder-blocks' ) }
								value={ table.price }
								onChange={ ( val ) => updateTable( tableIndex, 'price', val ) }
							/>
							<TextControl
								label={ __( 'Period', 'guten-builder-blocks' ) }
								value={ table.period }
								onChange={ ( val ) => updateTable( tableIndex, 'period', val ) }
							/>
						</div>

						<TextControl
							label={ __( 'Button Link', 'guten-builder-blocks' ) }
							value={ table.link }
							onChange={ ( val ) => updateTable( tableIndex, 'link', val ) }
						/>

						<TextControl
							label={ __( 'Button Label', 'guten-builder-blocks' ) }
							value={ table.linkLabel }
							onChange={ ( val ) => updateTable( tableIndex, 'linkLabel', val ) }
						/>

						<TextControl
							label={ __( 'Brand Color (Hex)', 'guten-builder-blocks' ) }
							value={ table.color }
							onChange={ ( val ) => updateTable( tableIndex, 'color', val ) }
						/>

						<ToggleControl
							label={ __( 'Featured / Popular', 'guten-builder-blocks' ) }
							checked={ table.isFeatured }
							onChange={ ( val ) => updateTable( tableIndex, 'isFeatured', val ) }
						/>

						{ table.isFeatured && (
							<TextControl
								label={ __( 'Badge Ribbon Text', 'guten-builder-blocks' ) }
								value={ table.badgeText }
								onChange={ ( val ) => updateTable( tableIndex, 'badgeText', val ) }
								placeholder={ __( 'e.g. POPULAR', 'guten-builder-blocks' ) }
							/>
						) }

						<div style={ { marginTop: '12px', borderTop: '1px solid #cbd5e1', paddingTop: '12px' } }>
							<p style={ { fontWeight: 'bold', fontSize: '11px', margin: '0 0 8px 0', textTransform: 'uppercase', color: '#64748b' } }>
								{ __( 'Features List', 'guten-builder-blocks' ) }
							</p>

							{ ( table.features || [] ).map( ( feature, featureIndex ) => (
								<div key={ featureIndex } style={ { display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' } }>
									<input
										type="checkbox"
										checked={ feature.isEnable }
										onChange={ ( e ) => updateFeature( tableIndex, featureIndex, 'isEnable', e.target.checked ) }
										style={ { width: '16px', height: '16px' } }
									/>
									<div style={ { flex: 1 } }>
										<TextControl
											value={ feature.label }
											onChange={ ( val ) => updateFeature( tableIndex, featureIndex, 'label', val ) }
											style={ { marginBottom: 0 } }
										/>
									</div>
									<Button
										isDestructive
										variant="link"
										onClick={ () => deleteFeature( tableIndex, featureIndex ) }
										style={ { minWidth: 'auto', padding: 0 } }
									>
										✕
									</Button>
								</div>
							) ) }

							<Button variant="secondary" isSmall onClick={ () => addFeature( tableIndex ) } style={ { width: '100%', justifyContent: 'center', marginTop: '6px' } }>
								{ __( '＋ Add Feature Row', 'guten-builder-blocks' ) }
							</Button>
						</div>
					</div>
				) ) }

				<Button variant="secondary" onClick={ addTable } style={ { width: '100%', justifyContent: 'center' } }>
					{ __( '＋ Add Pricing Card', 'guten-builder-blocks' ) }
				</Button>
			</PanelBody>
		</>
	);
};

export default General;
