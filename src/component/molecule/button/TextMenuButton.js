import React from 'react';
import styled from 'styled-components/native';

import Label from 'src/component/atom/label';

const TextMenuButton = ({title, onPress, textSize}) => {
  return (
    <TextButton onPress={onPress}>
      <Label color="black" text={title} size={textSize} />
    </TextButton>
  );
};

const TextButton = styled.TouchableOpacity``;

export default TextMenuButton;
