import React, { PureComponent } from 'react'
import {Button} from 'react-native-elements';

const CustomButton =({title,onPress,type="solid"})=> {
  return(
    <Button title={title} type={type} onPress={onPress}></Button>
  )
}

export default CustomButton;