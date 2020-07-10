import React from 'react';
import {View,Text} from 'react-native';
import HomeHeader from './HomeHeader/HomeHeader';
import ItemList from '../Items/ItemList/ItemList';

const HomePage = ()=>{
  return(
    <View>
      <HomeHeader/>
      <ItemList/>
    </View>
  )
}

export default HomePage;