import React from 'react';
import { View,Text } from 'react-native';
import ChatRoomHeader from 'src/component/Chatting/ChatRoom/ChatRoomHeader';
import ChatRoomInput from 'src/component/Chatting/ChatRoom/ChatRoomInput';
import ChatRoomMessage from 'src/component/Chatting/ChatRoom/ChatRoomMessage';

const ChatRoom =(props)=> {
  const {id,nickname} = props.route.params;

  return(
    <View>
      <ChatRoomHeader nickname={nickname}/>
      <ChatRoomMessage/>
      <ChatRoomInput></ChatRoomInput>
    </View>
  )
}

export default ChatRoom;