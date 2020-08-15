
import React,{useEffect} from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';
import LottieView from 'lottie-react-native';

const SplashWindow = (props) => {
  useEffect(()=>{
    setInterval(()=>{
      props.setIsLoading(true);
    },3000);
  })
  // animation 코드 넣기
  return(
    <View>
      <Text>구름마켓에 오신걸 환영해요!</Text>
    </View>
  )
}

export default SplashWindow;