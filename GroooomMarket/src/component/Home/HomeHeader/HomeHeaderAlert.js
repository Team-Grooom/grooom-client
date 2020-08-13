import React from 'react';
import {Button} from 'react-native';

const HomeHeaderAlertButton = ({navigation}) => {
  const onClickHeaderAlertBtn = () => {
    navigation.navigate('Alert Setting');
  };

  return <Button title="알림" onPress={onClickHeaderAlertBtn} />;
};

export default HomeHeaderAlertButton;
