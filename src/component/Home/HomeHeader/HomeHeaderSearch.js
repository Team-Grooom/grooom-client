import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeHeaderSearchNavigateButton = ({navigation}) => {
  const onClickHeaderSearchBtn = () => {
    navigation.navigate('Search');
  };

  return <Icon name="search" size={30} onPress={onClickHeaderSearchBtn} />;
};

export default HomeHeaderSearchNavigateButton;
