import React from 'react';
import {View,Text,Image,TouchableOpacity,Button,StyleSheet} from 'react-native';
import ProfileView from 'src/component/MyPage/MyPageBody/ProfileView';
import MyTransaction from 'src/component/MyPage/MyPageBody/MyTransaction';
import styled from 'styled-components/native';

const MyPageBody =()=>{
  return(
    <View>
      <ProfileView/>
      <MyTransaction/>
    </View>
  );
}

export default MyPageBody;