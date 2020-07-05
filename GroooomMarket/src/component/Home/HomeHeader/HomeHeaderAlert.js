import React from 'react';
import {Button} from 'react-native';

const HomeHeaderAlertButton =()=> {

  const onClickHeaderAlertBtn =()=> {
    alert("알림 안내 화면으로 Navigate");
  }

  return(
    <Button title="알림" onPress={onClickHeaderAlertBtn}/>
  )
}

export default HomeHeaderAlertButton;