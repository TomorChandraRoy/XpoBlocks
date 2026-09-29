import { SelectControl, PanelBody } from '@wordpress/components';
import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { ItemsPanel } from 'tr-tools';
import PanelItems from './PanelItems';
const textDomain = 'xpo-block';


const General = ({ attributes, setAttributes, clientId }) => {
	const { blockId, layout, steps } = attributes;
	const prevClientId = useRef(clientId);

	useEffect(() => {
		const clientChanged = prevClientId.current !== clientId;
		if (!blockId || clientChanged) {
			const uuid = window.crypto && crypto.randomUUID
				? crypto.randomUUID().split('-')[0]
				: Math.random().toString(36).substring(2, 9);
			setAttributes({ blockId: `xpo-scroll-story-${uuid}` });
			prevClientId.current = clientId;
		}
	}, [blockId, clientId, setAttributes]);

	return (
		<>
			<PanelBody className="bPlPanelBody" title={__('Layout Settings', textDomain)} initialOpen={true}>
				<SelectControl
					label={__('Layout', textDomain)}
					value={layout}
					options={[
						{ label: __('Sticky Right (Content Left)', textDomain), value: 'sticky-right' },
						{ label: __('Sticky Left (Content Right)', textDomain), value: 'sticky-left' },
					]}
					onChange={val => setAttributes({ layout: val })}
				/>
			</PanelBody>

			<ItemsPanel
				title={__('Steps Manager', textDomain)}
				initialOpen={true}
				items={steps}
				onChange={newSteps => setAttributes({ steps: newSteps })}
				defaultItem={{
					title: 'New Step',
					description: 'Description here.',
					mediaType: 'image',
					mediaUrl: '',
					lottieUrl: ''
				}}
				addButtonLabel={__('Add Step', textDomain)}
				itemTitleKey="title"
				ItemSettings={PanelItems}
			/>
		</>
	);
};

export default General;
