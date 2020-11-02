import React from 'react';
import styled from 'styled-components/native';

const StyledText = styled.Text`
<<<<<<< HEAD:src/component/atom/label.js
  color: ${props => props.color};
  font-size: ${props => props.size}px;
=======
  color : ${props=> props.color};
  font-size : ${props=> props.size};
>>>>>>> 921f0523b79640efb95cd16213cf16450f45b9d2:GroooomMarket/src/component/atom/label.js
`;

const Label = ({text, color, size}) => {
  return (
    <StyledText color={color} size={size}>
      {text}
    </StyledText>
  );
};

export default Label;
