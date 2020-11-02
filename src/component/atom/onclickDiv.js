import React from 'react';
import styled from 'styled-components/native';

const StyledDiv = styled.div`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
`;

const onclickDiv = ({onclick, text, color, size, ...props}) => {
  return (
    <StyledDiv color={color} size={size} onclick={onclick}>
      {text}
      {...props}
    </StyledDiv>
  );
};

export default onclickDiv;
