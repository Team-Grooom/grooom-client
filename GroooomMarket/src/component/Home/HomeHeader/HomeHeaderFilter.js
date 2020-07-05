import React from 'react';
import {Button} from 'react-native';

const HomeHeaderFilterButton =()=> {

  const onClickHeaderFilterBtn =()=> {
    alert("동네 지역 필터링 기능");
  }

  return(
    <Button title="Filter" onPress={onClickHeaderFilterBtn}/>
  )
}

export default HomeHeaderFilterButton;