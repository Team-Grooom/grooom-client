import React from 'react';
import {Picker} from '@react-native-community/picker';

// childFunction means like map, filter func which are render Picker.items

const PickRegion =({childFunction=null,onValueChange=null,selectedValue=null})=> {
  return(
    <Picker
      onValueChange={onValueChange}
      selectedValue={selectedValue}
      >
    </Picker>
  )
}

export default PickRegion;