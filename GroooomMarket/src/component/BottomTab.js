import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './Home/HomePage';
import Category from './Category/Category';
import Writing from './Writing/Writing';
import ChatListView from 'src/component/template/chatRoomTemplate';
import MyPage from './MyPage/MyPage';
import Icon from 'react-native-vector-icons/Ionicons';

// 헤더옵션은 다 Navigtor 옵션으로 통일하자 영우야

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === '구름마켓') {
            iconName = focused ? 'basket' : 'basket-outline';
          } else if (route.name === '카테고리') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === '글쓰기') {
            iconName = focused ? 'pencil' : 'pencil-outline';
          } else if (route.name === '채팅') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === '마이페이지') {
            iconName = focused ? 'cloud' : 'cloud-outline';
          }
          return <Icon name={iconName} size={35} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'skyblue',
        inactiveTintColor: 'lightgray',
        showLabel: false,
      }}>
      <Tab.Screen name="구름마켓" component={HomePage} />
      <Tab.Screen name="카테고리" component={Category} />
      <Tab.Screen name="글쓰기" component={Writing} />
      <Tab.Screen name="채팅" component={ChatListView} />
      <Tab.Screen name="마이페이지" component={MyPage} />
    </Tab.Navigator>
  );
};

export default BottomTab;
