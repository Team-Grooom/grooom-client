import React,{useState,useContext} from 'react';
import {Text,View,TextInput,Button,TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {SocketContext} from 'store/ChatSocketStore';

const StyledView = styled.View`
  display:flex;
  flex-direction:row;
  background-color:white;
  justify-content:space-between;
`;

const StyledTextInput = styled.TextInput`
  flex:9;
`;

const StyledButton =styled.TouchableOpacity`
  flex:1;
  align-items:center;
  justify-content:center;
  text-align:center;
`;

const ChatRoomInput=({roomCode,user})=> {
  const [message,setMessage] = useState();
  const socket = useContext(SocketContext); // 소켓 컨텍스트 받기
  
  // input onChange event
  const onChangeMessage =(text)=> {
    setMessage(text);
  }

  // form submit event
  const onPressSendButton =()=> {
    // 메시지 송신 이벤트
    socket.emit('chat message',roomCode,user,message);
  }
  return(
    <StyledView>
      <StyledTextInput onChangeText={onChangeMessage} value={message}/>
      <StyledButton onPress={onPressSendButton}><Text>SEND</Text></StyledButton>
    </StyledView>
  )
}

export default ChatRoomInput;