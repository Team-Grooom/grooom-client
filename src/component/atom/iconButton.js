import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

// color value would be RGB Value things (not String)
const IconButton = ({name, size, text, color, backgroundColor, onPress}) => {
  return (
    <Icon.Button
      name={name}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      onPress={onPress}>
      {text}
    </Icon.Button>
  );
};

export default IconButton;
