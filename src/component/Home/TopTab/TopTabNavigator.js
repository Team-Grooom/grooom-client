import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdvertisingView from '../Advertising/Advetising';
import TradingView from '../Trading/Trading';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName="중고거래" backBehavior="none">
      <Tab.Screen
        name="중고거래"
        component={TradingView}
        navigation={navigation}
      />
      <Tab.Screen
        name="동네생활"
        component={AdvertisingView}
        navigation={navigation}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
