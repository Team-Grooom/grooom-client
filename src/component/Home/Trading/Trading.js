import React from 'react';
import {View} from 'react-native';
import ItemList from '../../Items/ItemList/ItemList';

const Trading = ({navigation}) => {
  return (
    <View>
      <ItemList navigation={navigation} />
    </View>
  );
};

export default Trading;
