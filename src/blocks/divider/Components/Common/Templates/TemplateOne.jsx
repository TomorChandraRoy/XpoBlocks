import { CrownIcon, StarIcon, HeartIcon, CircleIcon, SquareIcon } from '../../../utils/icons';

const TemplateOne = ({ attributes }) => {
    const { dividerType = 'text', text = 'Text', iconName = 'tabler--crown' } = attributes || {};

    const icons = {
      'tabler--crown': <CrownIcon />,
      'tabler--star': <StarIcon />,
      'tabler--heart': <HeartIcon />,
      'tabler--circle': <CircleIcon />,
      'tabler--square': <SquareIcon />,
    };

    return (
      <div className="guten-builder-divider-template-1">
        <div className="gbb-divider">
          {dividerType === 'text' ? (
            <span className="gbb-divider-text">{text}</span>
          ) : dividerType === 'icon' ? (
            <span className="gbb-divider-icon-wrapper">
              {icons[iconName] || icons['tabler--crown']}
            </span>
          ) : null}
        </div>
      </div>
    );
};

export default TemplateOne;
