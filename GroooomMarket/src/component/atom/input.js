import React from 'react';
import {Input} from 'react-native-elements';

// TODO: icon needs Component which is react-native-vector-icons

const TextInput =({placeholder,icon,onChange})=> {
  return(
    <Input placeholder={placeholder} leftIcon={icon} onChange={onChange}/>
  )
}

export default TextInput;