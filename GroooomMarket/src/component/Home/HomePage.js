import React from 'react';
import {View, Text} from 'react-native';
import HomeHeader from './HomeHeader/HomeHeader';
import ItemList from '../Items/ItemList/ItemList';
import SearchScreen from './SearchScreen/SearchScreen';
import FilteringAreaScreen from '../MyPage/Setting/FilteringAreaScreen';
import AlertSettingScreen from '../MyPage/Setting/AlertSettingScreen';
import ItemScreen from '../Items/Item';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabNavigator from './TopTab/TopTabNavigator';

const HomeStack = createStackNavigator();

const initialHome = ({navigation}) => {
  return (
    <View>
      <HomeHeader navigation={navigation} />
      <TopTabNavigator navigation={navigation} />
      <ItemList navigation={navigation} />
    </View>
  );
};

const HomePage = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={initialHome} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="Filtering Area" component={FilteringAreaScreen} />
      <HomeStack.Screen name="Alert Setting" component={AlertSettingScreen} />
      <HomeStack.Screen name="Item" component={ItemScreen} />
    </HomeStack.Navigator>
  );
};

export default HomePage;
