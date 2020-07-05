import React from 'react';
import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const HomePage = ()=>{
  return(
    <View>
      <Text>
        여긴 홈페이지얌.
      </Text>
    </View>
  )
}

export default HomePage;