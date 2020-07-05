import React from 'react';
import {View,Text} from 'react-native';
import HomeHeader from './HomeHeader/HomeHeader';

const HomePage = ()=>{
  return(
    <View>
      <HomeHeader/>
      <Text>
        여긴 홈페이지얌.
      </Text>
    </View>
  )
}

export default HomePage;