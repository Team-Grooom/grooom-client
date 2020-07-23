import React,{useState} from 'react';
import {View} from 'react-native';
import HomeHeaderSearchBtn from './HomeHeaderSearch';
import HomeHeaderFilterBtn from './HomeHeaderFilter';
import HomeHeaderAlertBtn from './HomeHeaderAlert';
import HomeStyle from 'assets/styles/HomePageStyle';

const HomeHeader =({navigation})=> {

  return(
    <View style={HomeStyle.header}>
      <View style={HomeStyle.btnContainer}>
        <HomeHeaderSearchBtn navigation={navigation} />
        <HomeHeaderFilterBtn navigation={navigation}/>
        <HomeHeaderAlertBtn navigation={navigation}/>
      </View>
    </View>
  )
}

export default HomeHeader;