import React from 'react';
import {Button} from 'react-native';
import SearchScreen from '../SearchScreen/SearchScreen';

const HomeHeaderSearchNavigateButton =({navigation})=> {

  const onClickHeaderSearchBtn =()=> {
    navigation.navigate('Search');
  }

  return(
    <Button title="검색" onPress={onClickHeaderSearchBtn}/>
  )
}

export default HomeHeaderSearchNavigateButton;