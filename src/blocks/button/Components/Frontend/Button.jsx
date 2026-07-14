import Style from '../Common/Style';
import { plantIcon1, plantIcon2, plantIcon3 } from '../../utils/icons';

const FrontendButton = ({ attributes, id }) => {
  const { text, actionType, url, target, iconSource, customIcon1, customIcon2, customIcon3 } = attributes;

  const linkUrl = actionType === 'link' && url ? url : '#';

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

  return (
    <>
      <Style attributes={attributes} id={id} />
      <a
        className="guten-builder-blocks-button wp-element-button-wrapper"
        href={linkUrl}
        target={target === '_blank' ? '_blank' : undefined}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        style={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}
      >
        <span className="guten-builder-blocks-button wp-element-button" dangerouslySetInnerHTML={{ __html: text }} />

        {/* SVG Icons (Preset Leaves or Custom Dynamic SVGs) */}
        <div className="icon-1">{renderIcon(customIcon1, plantIcon1)}</div>
        <div className="icon-2">{renderIcon(customIcon2, plantIcon2)}</div>
        <div className="icon-3">{renderIcon(customIcon3, plantIcon3)}</div>
      </a>
    </>
  );
};

export default FrontendButton;
