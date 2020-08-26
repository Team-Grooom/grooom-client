import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeHeaderAlertButton = ({navigation}) => {
  const onClickHeaderAlertBtn = () => {
    navigation.navigate('Alert Setting');
  };

  return (
    <Icon
      name="notifications-outline"
      size={30}
      onPress={onClickHeaderAlertBtn}
    />
  );
};

export default HomeHeaderAlertButton;
