import React,{useState,useRef} from 'react';
import {View,TextInput,Button,TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
const io = require('socket.io-client');

const StyledView = styled.View`
  align-self: auto;
  display:flex;
  flex-direction:row;
  background-color:white;
  justify-content:space-between;
`;

const ChatRoomInput=()=> {
  const [message,setMessage] = useState();

  const onChangeMessage =(text)=> {
    setMessage(text);
  }
  const onPressSendButton =()=> {
    // send message
    alert(message+"를 전송합니다.");
    setMessage('');
  }

  return(
    <StyledView>
      <TextInput onChangeText={onChangeMessage} value={message}/>
      <Button onPress={onPressSendButton} title="SEND"/>
    </StyledView>
  )
}

export default ChatRoomInput;