import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const IconButtonWrapper = styled.TouchableOpacity`
  align-items : center;
  justify-content : center;
`;

const IconButton =({name,size})=> {
  return(
    <IconButtonWrapper>
      <Icon name={name} size={size}/>
    </IconButtonWrapper>
  )
}

export default IconButton;