import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color : ${props=> props.color};
  font-size : ${props=> props.size};
`;

const Label =({text,color,size})=> {
  return(
    <StyledText color={color} size={size}>
      {text}
    </StyledText>
  )
}

export default Label;
