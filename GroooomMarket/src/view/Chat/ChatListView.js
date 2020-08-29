import React from 'react';
import {StackActions} from '@react-navigation/native'
import ChatListTemplate from 'src/component/template/chatListTemplate';

const ChatListView =({navigation})=> {
  
  const navigateToChatRoom =()=> {
    navigation.navigate('ChatRoomModal',{roomCode:1, seller:'seller', user:'User'});
  }
  
  return(
    <ChatListTemplate navigateToChatRoom={navigateToChatRoom}/>
  )

}

export default ChatListView;