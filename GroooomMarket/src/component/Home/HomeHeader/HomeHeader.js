import React,{useState} from 'react';
import {View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import HomeHeaderPicker from './HomeHeaderPicker';
import HomeHeaderSearchBtn from './HomeHeaderSearch';
import HomeHeaderFilterBtn from './HomeHeaderFilter';
import HomeHeaderAlertBtn from './HomeHeaderAlert';
import HomeStyle from '../../../../styles/HomePageStyle';

const HomeHeader =()=> {

  return(
    <View style={HomeStyle.header}>
      <HomeHeaderPicker/>
      <View style={HomeStyle.btnContainer}>
        <HomeHeaderSearchBtn/>
        <HomeHeaderFilterBtn/>
        <HomeHeaderAlertBtn/>
      </View>
    </View>
  )
}

export default HomeHeader;