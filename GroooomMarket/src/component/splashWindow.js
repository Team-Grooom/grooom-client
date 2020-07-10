
import React,{useEffect} from 'react';
import {
  Image,
  View,
  Text,
} from 'react-native';

const SplashWindow = (props) => {

  useEffect(()=>{
    setInterval(()=>{
      props.setIsLoading(true);
    },3000);
  })

  return(
    <View>
      <Image
        source={require('../../picture/teampic.png')}
      />
      <Text>구름마켓에 오신걸 환영해요!</Text>
    </View>
  )
}

export default SplashWindow;