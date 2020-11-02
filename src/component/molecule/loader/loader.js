import React from 'react';
import { View, Text} from 'react-native';
import Animate from 'src/component/atom/animate';
import Label from 'src/component/atom/label';
import styled from 'styled-components/native';

const StyledView = styled.View`
  display : flex;
  align-items : center;
  justify-content : center;
`;

const Loader =()=> {
  return(
    <StyledView>
      <Label text="잠시만 기다려주세요..." color="skyblue" size="30"/>
      <Animate size="200" route="'assets/lottiefiles/cloud-lottie-loader.json'"/>
    </StyledView>
  )
}

export default Loader;