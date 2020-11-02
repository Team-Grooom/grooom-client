import React from 'react';
import {View,Text} from 'react-native'
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

const StyledLottieView = styled(LottieView)`
  width : ${(props)=> props.size}px;
  height : ${(props)=> props.size}px;
`;


const Animate =({size=null,route=null})=> {
  return(
    <StyledLottieView
        size={size}
        source={require('assets/lottiefiles/cloud-lottie-splash2.json')}
        autoPlay
        loop
    />
  )
}

export default Animate;