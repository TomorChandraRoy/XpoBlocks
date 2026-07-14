import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { plantIcon1, plantIcon2, plantIcon3 } from '../../utils/icons';

const Button = ({ attributes, setAttributes }) => {
  const { buttonAlign, text, iconSource, customIcon1, customIcon2, customIcon3 } = attributes;

  const renderIcon = (customIcon, presetIcon) => {
    if (iconSource === 'custom' && customIcon) {
      const trimmed = customIcon.trim();
      if (trimmed.startsWith('<svg') || trimmed.includes('<svg')) {
        return <div dangerouslySetInnerHTML={{ __html: customIcon }} style={{ display: 'contents' }} />;
      } else {
        return <img src={customIcon} alt="" style={{ width: '100%', height: 'auto', display: 'block' }} />;
      }
    }
    return presetIcon;
  };

  const buttonElement = (
    <div className={`guten-builder-blocks-btn-wrapper ${buttonAlign ? `button-align-${buttonAlign}` : ''}`}>
      <div className="guten-builder-blocks-button wp-element-button-wrapper" style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
        <RichText
          tagName="span"
          className="guten-builder-blocks-button wp-element-button"
          value={text}
          onChange={value => setAttributes({ text: value })}
          placeholder={__('Add text...', 'guten-builder-blocks')}
        />
        {/* SVG Icons (Preset Leaves or Custom Dynamic SVGs) */}
        <div className="icon-1">{renderIcon(customIcon1, plantIcon1)}</div>
        <div className="icon-2">{renderIcon(customIcon2, plantIcon2)}</div>
        <div className="icon-3">{renderIcon(customIcon3, plantIcon3)}</div>
      </div>
    </div>
  );

  return buttonElement;
};

export default Button;
