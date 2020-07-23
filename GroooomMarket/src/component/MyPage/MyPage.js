import React from 'react';
import {View} from 'react-native';
import MyPageHeader from 'src/component/MyPage/MyPageHeader/MyPageHeader';
import MyPageBody from 'src/component/MyPage/MyPageBody/MyPageBody';
import {createStackNavigator} from '@react-navigation/stack';

const MyPage =({navigation})=> {
  return(
      <View>
        <MyPageHeader navigation={navigation}/>
        <MyPageBody navigation={navigation}/>
      </View>
  )
}
export default MyPage;