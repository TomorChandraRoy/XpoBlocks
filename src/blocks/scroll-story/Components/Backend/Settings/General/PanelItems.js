import { __ } from '@wordpress/i18n';
import { SelectControl, TextControl, TextareaControl } from '@wordpress/components';

const PanelItems = ({ item, updateField }) => {
	const mediaType = item.mediaType || 'image';

	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '8px' }}>
			<TextControl
				label={__('Title :', 'xpo-blocks')}
				value={item.title !== undefined ? item.title : ''}
				onChange={(val) => updateField('title', val)}
			/>

			<TextareaControl
				label={__('Description :', 'xpo-blocks')}
				value={item.description !== undefined ? item.description : ''}
				onChange={(val) => updateField('description', val)}
				rows={3}
			/>

			<SelectControl
				label={__('Media Type :', 'xpo-blocks')}
				value={mediaType}
				options={[
					{ label: __('Image URL', 'xpo-blocks'), value: 'image' },
					{ label: __('Lottie URL', 'xpo-blocks'), value: 'lottie' },
				]}
				onChange={(val) => updateField('mediaType', val)}
			/>

			{mediaType === 'lottie' ? (
				<TextControl
					label={__('Lottie Embed/iFrame URL :', 'xpo-blocks')}
					value={item.lottieUrl || ''}
					onChange={(val) => updateField('lottieUrl', val)}
					placeholder="https://lottie.host/embed/...lottie"
				/>
			) : (
				<TextControl
					label={__('Image URL :', 'xpo-blocks')}
					value={item.mediaUrl || ''}
					onChange={(val) => updateField('mediaUrl', val)}
					placeholder="https://example.com/image.jpg"
				/>
			)}
		</div>
	);
};

export default PanelItems;
