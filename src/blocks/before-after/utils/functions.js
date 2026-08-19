import { produce } from "immer";
import { ArrowsIcon, LinesIcon, DotsIcon, GripperIcon, CircleArrowsIcon, PlusIcon } from './icons';

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};

export const renderDividerIcon = (attributes) => {
  const iconType = attributes?.dividerIcon || 'dots';
  const customIcon = attributes?.customDividerIcon || '';
  const iconSize = attributes?.dividerIconSize || 16;

  if (iconType === 'custom' && customIcon) {
    return <span className="gbb-before-after-one__handle" style={{ width: `${iconSize}px`, height: `${iconSize}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: customIcon }} />;
  }

  if (iconType === 'arrows') {
    return (
      <span className="gbb-before-after-one__handle">
        <ArrowsIcon iconSize={iconSize} />
      </span>
    );
  }

  if (iconType === 'lines') {
    return (
      <span className="gbb-before-after-one__handle">
        <LinesIcon iconSize={iconSize} />
      </span>
    );
  }

  if (iconType === 'gripper') {
    return (
      <span className="gbb-before-after-one__handle">
        <GripperIcon iconSize={iconSize} />
      </span>
    );
  }

  if (iconType === 'circle-arrows') {
    return (
      <span className="gbb-before-after-one__handle">
        <CircleArrowsIcon iconSize={iconSize} />
      </span>
    );
  }

  if (iconType === 'plus') {
    return (
      <span className="gbb-before-after-one__handle">
        <PlusIcon iconSize={iconSize} />
      </span>
    );
  }

  // Default 'dots'
  return (
    <span className="gbb-before-after-one__handle">
      <DotsIcon iconSize={iconSize} />
    </span>
  );
};