import React from 'react';
import styled from 'styled-components/native';

const Wrapper = styled.View`
  background-color : ${props=> props.color};
  width : 100%;
  height : 40px;
  display: flex;
  align-items : center;
  justify-content : flex-start;
  margin : 20px;
`;

const HeaderWrapper =({color,children})=> {

  return(
    <Wrapper color={color}>
      {children}
    </Wrapper>
  )
}

export default HeaderWrapper;