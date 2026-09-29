import { __ } from '@wordpress/i18n';
import { SelectControl, TextControl, TextareaControl } from '@wordpress/components';

const textDomain = 'xpo-block';

const PanelItems = ({ item, updateField }) => {
	const mediaType = item.mediaType || 'image';

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
			<TextControl
				label={__('Title :', textDomain)}
				value={item.title !== undefined ? item.title : ''}
				onChange={(val) => updateField('title', val)}
			/>

			<TextareaControl
				label={__('Description :', textDomain)}
				value={item.description !== undefined ? item.description : ''}
				onChange={(val) => updateField('description', val)}
				rows={3}
			/>

			<SelectControl
				label={__('Media Type :', textDomain)}
				value={mediaType}
				options={[
					{ label: __('Image URL', textDomain), value: 'image' },
					{ label: __('Lottie URL', textDomain), value: 'lottie' },
				]}
				onChange={(val) => updateField('mediaType', val)}
			/>

			{mediaType === 'lottie' ? (
				<TextControl
					label={__('Lottie Embed/iFrame URL :', textDomain)}
					value={item.lottieUrl || ''}
					onChange={(val) => updateField('lottieUrl', val)}
					placeholder="https://lottie.host/embed/...lottie"
				/>
			) : (
				<TextControl
					label={__('Image URL :', textDomain)}
					value={item.mediaUrl || ''}
					onChange={(val) => updateField('mediaUrl', val)}
					placeholder="https://example.com/image.jpg"
				/>
			)}
		</div>
	);
};

export default PanelItems;
