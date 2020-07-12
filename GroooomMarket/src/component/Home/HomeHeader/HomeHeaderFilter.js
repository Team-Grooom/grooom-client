import React from 'react';
import {Button} from 'react-native';
import FilteringAreaScreen from '../../MyPage/Setting/FilteringAreaScreen';

const HomeHeaderFilterButton =({navigation})=> {

  const onClickHeaderFilterBtn =()=> {
    navigation.navigate("Filtering Area");
  }

  return(
    <Button title="Filter" onPress={onClickHeaderFilterBtn}/>
  )
}

export default HomeHeaderFilterButton;