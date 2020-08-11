import React,{useState,useEffect} from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';
import MessageBubble from 'src/component/Chatting/ChatRoom/MessageBubble';
const ChatFetch = require('src/api/ChatFetch');

const dummyChat=[
  {id : 1,message : "이히힣히1"},
  {id : 2,message : "이히힣히2"},
  {id : 3,message : "이히힣히3"},
  {id : 4,message : "이히힣히4"},
  {id : 5,message : "이히힣히5"},
  {id : 6,message : "이히힣히6"},
]

const ChatRoomMessage =()=> {
  const [messageList,setMessageList] =useState(dummyChat);

  const renderChatMessage =({item})=> {
    return(
      <MessageBubble message={item.message}/>
    )
  }

  // const ChatListFetch = async()=> {
  //   const result = await ChatFetch.ChatListFetchAPI();
  //   setMessageList(result);
  // }

  // useEffect(()=>{
  //   ChatListFetch();
  // },[]);

  return(
    <FlatList
      data={messageList}
      renderItem={renderChatMessage}
      keyExtractor={item=>item.id}
    />
  )
}

export default ChatRoomMessage;