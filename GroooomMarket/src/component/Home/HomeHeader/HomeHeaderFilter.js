import React from 'react';
import FilteringAreaScreen from '../../MyPage/Setting/FilteringAreaScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeHeaderFilterButton = ({navigation}) => {
  const onClickHeaderFilterBtn = () => {
    navigation.navigate('Filtering Area');
  };

  return <Icon name="filter" size={30} onPress={onClickHeaderFilterBtn} />;
};

export default HomeHeaderFilterButton;
