import React from 'react';
import {View,Text} from 'react-native';
import styled from 'styled-components/native';

const StyledMessage = styled.Text`
  font-size : 20;
`;

const MessageBubble =({message})=> {
  return(
    <View><StyledMessage>{message}</StyledMessage></View>
  )
}

export default MessageBubble;