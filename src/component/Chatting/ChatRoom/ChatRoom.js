import React,{useContext} from 'react';
import { View,Text } from 'react-native';
import ChatRoomHeader from 'src/component/Chatting/ChatRoom/ChatRoomHeader';
import ChatRoomInput from 'src/component/Chatting/ChatRoom/ChatRoomInput';
import ChatRoomMessage from 'src/component/Chatting/ChatRoom/ChatRoomMessage';
import styled from 'styled-components/native';
import {SocketContextProvider} from 'src/store/ChatSocketStore';

const ChatInputContainer = styled.KeyboardAvoidingView`
  display:flex;
`;

const ChatRoom =(props)=> {
  const {buyer,seller,roomCode} = props.route.params;
  return(
    <SocketContextProvider>
      <ChatInputContainer>
        <ChatRoomHeader roomCode={roomCode} user={buyer}/>
        <ChatRoomMessage roomCode={roomCode} user={seller}/>
        <ChatRoomInput roomCode={roomCode} user={seller}></ChatRoomInput>
      </ChatInputContainer>
    </SocketContextProvider>
  )
}

export default ChatRoom;