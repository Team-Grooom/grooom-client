import React,{useEffect} from 'react';
import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

const SplashView = styled.View`
  flex-direction : row;
  justify-content : center;
  align-content : center;
  height : 100%;
  background-color : lightcyan;
`;

const SplashText = styled.Text`
  margin-top : 200px;
  font-family : "NanumMyeongjo-ExtraBold";
  font-size : 60px;
  text-align : justify;
  color : black;
`;

const SplashWindow = ({setIsLoadingTrue}) => {
  useEffect(()=>{
    setInterval(()=>{
      setIsLoadingTrue();
    },1400);
  })
  // animation 코드 넣기
  return(
    <SplashView>
      <LottieView
        source={require('assets/lottiefiles/cloud-lottie-splash.json')}
        autoPlay
        loop
      />
      <SplashText>구름 마켓</SplashText>
    </SplashView>
  )
}

export default SplashWindow;