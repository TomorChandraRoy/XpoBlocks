import { __ } from '@wordpress/i18n';
import { PanelBody, ToggleControl, Button, TextControl, TextareaControl } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import { getAddedItems, getDeletedItems, getDuplicatedItems } from '../../../../utils/functions';

const General = ({ attributes, setAttributes, clientId }) => {
	const {
		blockId,
		items = [],
		allowMultiple
	} = attributes;

	const prevClientId = useRef( clientId );

	useEffect( () => {
		const clientChanged = prevClientId.current !== clientId;
		if ( ! blockId || clientChanged ) {
			const uuid = window.crypto && crypto.randomUUID 
				? crypto.randomUUID().split( '-' )[ 0 ] 
				: Math.random().toString( 36 ).substring( 2, 9 );
			setAttributes( { blockId: `gbb-faq-${ uuid }` } );
			prevClientId.current = clientId;
		}
	}, [ blockId, clientId, setAttributes ] );

	const updateItem = ( index, key, value ) => {
		const newItems = [ ...items ];
		newItems[ index ] = { ...newItems[ index ], [ key ]: value };
		setAttributes( { items: newItems } );
	};

	const addItem = () => {
		const newItem = {
			title: __( 'New FAQ Question', 'guten-builder-blocks' ),
			content: __( 'Add your FAQ answer content here.', 'guten-builder-blocks' ),
			isOpen: false
		};
		setAttributes( { items: getAddedItems( items, newItem ) } );
	};

	const deleteItem = ( index ) => {
		setAttributes( { items: getDeletedItems( items, index ) } );
	};

	const duplicateItem = ( index ) => {
		setAttributes( { items: getDuplicatedItems( items, index ) } );
	};

	return (
		<>
			<PanelBody title={ __( '⚙️ Layout', 'guten-builder-blocks' ) } initialOpen={ true }>
				<ToggleControl
					label={ __( 'Allow Multiple Open', 'guten-builder-blocks' ) }
					checked={ allowMultiple }
					onChange={ ( val ) => setAttributes( { allowMultiple: val } ) }
					help={ __( 'If disabled, expanding one item collapses the others.', 'guten-builder-blocks' ) }
				/>
			</PanelBody>

			<PanelBody title={ __( '📋 FAQ Items Manager', 'guten-builder-blocks' ) } initialOpen={ true }>
				{ items.map( ( item, index ) => (
					<div
						key={ index }
						style={ {
							background: '#f8fafc',
							border: '1px solid #e2e8f0',
							borderRadius: '6px',
							padding: '12px',
							marginBottom: '12px',
							position: 'relative'
						} }
					>
						<div style={ { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' } }>
							<span style={ { fontWeight: 'bold', fontSize: '12px', color: '#475569' } }>
								{ __( 'Item #', 'guten-builder-blocks' ) } { index + 1 }
							</span>
							<div style={ { display: 'flex', gap: '10px' } }>
								<Button
									variant="link"
									onClick={ () => duplicateItem( index ) }
									style={ { padding: 0, height: 'auto', minWidth: 'auto', textDecoration: 'none' } }
								>
									{ __( 'Duplicate', 'guten-builder-blocks' ) }
								</Button>
								<Button
									isDestructive
									variant="link"
									onClick={ () => deleteItem( index ) }
									style={ { padding: 0, height: 'auto', minWidth: 'auto', textDecoration: 'none' } }
								>
									{ __( 'Remove', 'guten-builder-blocks' ) }
								</Button>
							</div>
						</div>

						<TextControl
							label={ __( 'Question', 'guten-builder-blocks' ) }
							value={ item.title }
							onChange={ ( val ) => updateItem( index, 'title', val ) }
						/>

						<TextareaControl
							label={ __( 'Answer', 'guten-builder-blocks' ) }
							value={ item.content }
							onChange={ ( val ) => updateItem( index, 'content', val ) }
							rows={ 3 }
						/>
					</div>
				) ) }

				<Button variant="secondary" onClick={ addItem } style={ { width: '100%', justifyContent: 'center', marginTop: '8px' } }>
					{ __( '＋ Add FAQ Item', 'guten-builder-blocks' ) }
				</Button>
			</PanelBody>
		</>
	);
};

export default General;

