import { produce } from "immer";

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


export const DEFAULT_TEXT_GRADIENT = {
  gradientType: 'linear',
  angle: 90,
  stops: [
    { color: '#ffaa40', location: 0 },
    { color: '#9c40ff', location: 50 },
    { color: '#ffaa40', location: 100 }
  ]
};
