import React from 'react';
import {Input} from 'react-native-elements';
import styled from 'styled-components';
// TODO: icon needs Component which is react-native-vector-icons

const RoundView = styled.View`
  width : 100%;
  margin-top : 10px;
  border-width : 3px;
  border-color : lightskyblue;
  border-radius : 20px;
`;

const TextInput =({label,placeholder,icon,onChange})=> {
  return(
    <RoundView>
      <Input label={label} placeholder={placeholder} leftIcon={icon} onChangeText={onChange}/>
    </RoundView>
  )
}

export default TextInput;