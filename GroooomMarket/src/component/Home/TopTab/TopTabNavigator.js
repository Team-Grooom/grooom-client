import React from 'react';
import {View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdvertisingView from '../Advertising/Advetising';
import TradingView from '../Trading/Trading';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="중고거래" component={TradingView} />
      <Tab.Screen name="동네생활" component={AdvertisingView} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
