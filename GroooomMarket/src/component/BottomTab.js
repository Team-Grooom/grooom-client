import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { create } from 'react-test-renderer';
import HomePage from './Home/HomePage';
import Category from './Category/Category';
import Writing from './Writing/Writing';
import Chatting from './Chatting/Chatting';
import MyPage from './MyPage/MyPage';

// 헤더옵션은 다 Navigtor 옵션으로 통일하자 영우야

const Tab = createBottomTabNavigator();

const BottomTab =()=>{
  return(
      <Tab.Navigator>
        <Tab.Screen 
          name="구름마켓" 
          component={HomePage}
        />
        <Tab.Screen 
          name="카테고리" 
          component={Category}
        />
        <Tab.Screen 
          name="글 쓰기" 
          component={Writing}
        />
        <Tab.Screen 
          name="채팅" 
          component={Chatting}
        />
        <Tab.Screen 
          name="내 정보" 
          component={MyPage}
        />
      </Tab.Navigator>
  )
}

export default BottomTab;