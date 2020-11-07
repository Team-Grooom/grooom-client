import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

const AreaSettingAnimation = ({areaLevel}) => {
  // console.log(areaLevel);
  return (
    <AnimationContainer>
      <RangeAnimation
        size={100 * areaLevel}
        source={require('assets/lottiefiles/rangeAnimate2.json')}
        autoPlay
        loop
      />
      <HomeAnimation
        size={100}
        source={require('assets/lottiefiles/homeAnimate.json')}
        autoPlay
        loop
      />
    </AnimationContainer>
  );
};

const AnimationContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const HomeAnimation = styled(LottieView)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: absolute;
  z-index: 3;
`;

const RangeAnimation = styled(LottieView)`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  z-index: 1;
`;

export default AreaSettingAnimation;
