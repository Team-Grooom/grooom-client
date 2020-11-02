import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdvertisingView from '../Advertising/Advetising';
import TradingView from '../Trading/Trading';

const Tab = createMaterialTopTabNavigator();

const SearchTopTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator initialRouteName="중고거래" backBehavior="none">
      <Tab.Screen
        name="중고거래"
        component={TradingView}
        navigation={navigation}
      />
      <Tab.Screen
        name="동네정보"
        component={AdvertisingView}
        navigation={navigation}
      />
      <Tab.Screen
        name="사람"
        component={AdvertisingView}
        navigation={navigation}
      />
    </Tab.Navigator>
  );
};

export default SearchTopTabNavigator;
