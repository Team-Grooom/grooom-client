import React from 'react';
import {Button} from 'react-native';

const HomeHeaderSearchNavigateButton =()=> {

  const onClickHeaderSearchBtn =()=> {
    alert("Search화면으로 Navigate");
  }

  return(
    <Button title="검색" onPress={onClickHeaderSearchBtn}/>
  )
}

export default HomeHeaderSearchNavigateButton;