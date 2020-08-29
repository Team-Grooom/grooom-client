import React from 'react';
import { View } from 'react-native';
import ChatListHeader from 'src/component/molecule/header/chatListHeader';
import ChatListBody from 'src/component/organism/chatListBody';
import ChatListItem from 'src/component/molecule/listItem/chatListItem';
import styled from 'styled-components/native';

const dummyChatList = [
  {
    id : 1,
    source : "https://via.placeholder.com/150",
    userName : "전설의 판매자",
    lastChatMsg : "연락 늦게 읽었네요~",
    lastChatDate : "2020-08-27 23:22"
  },
  {
    id : 2,
    source : "https://via.placeholder.com/150",
    userName : "김 머릉",
    lastChatMsg : "아 빨리 사세요 빡치니까..;",
    lastChatDate : "2020-08-26 23:22"
  },
  {
    id : 3,
    source : "https://via.placeholder.com/150",
    userName : "김 머릉",
    lastChatMsg : "아 빨리 사세요 빡치니까..;",
    lastChatDate : "2020-08-26 23:22"
  },
  {
    id : 4,
    source : "https://via.placeholder.com/150",
    userName : "김 머릉",
    lastChatMsg : "아 빨리 사세요 빡치니까..;",
    lastChatDate : "2020-08-26 23:22"
  },
  {
    id : 5,
    source : "https://via.placeholder.com/150",
    userName : "김 머릉",
    lastChatMsg : "아 빨리 사세요 빡치니까..;",
    lastChatDate : "2020-08-26 23:22"
  },
  {
    id : 6,
    source : "https://via.placeholder.com/150",
    userName : "김 머릉",
    lastChatMsg : "아 빨리 사세요 빡치니까..;",
    lastChatDate : "2020-08-26 23:22"
  },
];

const ChatListView = styled.View`
  background-color : white;
  height : 100%;
`;

const ChatListTemplate =({navigation,navigateToChatRoom})=> {

  const renderChatListItem =({item})=> {
    return (
      <ChatListItem navigation={navigation} onPress={navigateToChatRoom} id={item.id} source={item.source} userName={item.userName} lastChatMsg={item.lastChatMsg} lastChatDate={item.lastChatDate}/>
    )
  }

  return(
    <ChatListView>
      <ChatListHeader/>
      <ChatListBody navigation={navigation} onPress={navigateToChatRoom} chatData={dummyChatList} renderItem={renderChatListItem} selectKey={item=>item.id}/>
    </ChatListView>
  )
}

export default ChatListTemplate;