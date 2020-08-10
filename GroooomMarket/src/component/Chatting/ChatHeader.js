import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';

const HeaderTextStyle = require('assets/styles/conceptStyle');

const StyleView = styled.View`
  background-color: #99ccff;
  flex-direction : row;
  justify-content: space-between;
`;

const ChatHeader =()=> {
  return(
    <StyleView>
      <Text style={HeaderTextStyle.HeaderFont}>채팅</Text>
    </StyleView>
  )
}

export default ChatHeader;