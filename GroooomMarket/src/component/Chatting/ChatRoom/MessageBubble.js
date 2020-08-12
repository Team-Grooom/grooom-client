import React from 'react';
import {View,Text} from 'react-native';
import styled from 'styled-components/native';

const MessageContainer = styled.View`
  border-width : 1px;
  padding : 5px;
  border-radius : 20px;
  margin : 10px;
  background-color : lightsteelblue;
`;

const MyMessageContainer = styled(MessageContainer)`
  background-color : lightgray;
`;

const StyledMessage = styled.Text`
  font-size : 20px;
`;

const MessageBubble =(props)=> props.myMsgFlag ? 
<MyMessageContainer><StyledMessage>{props.message}</StyledMessage></MyMessageContainer> :
<MessageContainer><StyledMessage>{props.message}</StyledMessage></MessageContainer>

export default MessageBubble;