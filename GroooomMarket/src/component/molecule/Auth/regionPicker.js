import React from 'react';
import { View } from 'react-native';
import Picker from 'src/component/atom/picker';
import Label from 'src/component/atom/label';

// TODO: Items mean Picker.item

const RegionPicker =({childFunction=null,onChange=null,selectedValue=null})=> {
  return(
    <View>
      <Label text="지역구를 선택하세요" color="black" size="20"/>
      <Picker childFunction={childFunction} onValueChange={onChange} selectedValue={selectedValue}/>
    </View>
  )
}

export default RegionPicker;