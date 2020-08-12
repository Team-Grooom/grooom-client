import React,{useState,useEffect} from 'react';
import {View,Text,FlatList} from  'react-native';
import styled from 'styled-components/native';
import EachChatList from 'src/component/Chatting/ChatList/EachChatList';
import ChatRoom from 'src/component/Chatting/ChatRoom/ChatRoom';
import {createStackNavigator} from '@react-navigation/stack';
const ChatFetch = require('src/api/ChatFetch');

const dummyChatList = [
  {
    id : 1,
    nickname : "전설의 판매자",
    latestChat : "연락 늦게 읽었네요~",
  },
  {
    id : 2,
    nickname : "멘종맨",
    latestChat : "이제서야 봤어요~",
  },
  {
    id : 3,
    nickname : "네고부탁맨",
    latestChat : "네고해주시면 감사하겠습니다.~",
  },
  {
    id : 4,
    nickname : "더미맨",
    latestChat : "덤덤덤덤덤덤~",
  },
  {
    id : 5,
    nickname : "킹대현",
    latestChat : "아~핫핫핫핫",
  },
  {
    id : 6,
    nickname : "킹영우",
    latestChat : "에헤헤~",
  },
  {
    id : 7,
    nickname : "킹상혁",
    latestChat : "힣",
  },
  {
    id : 8,
    nickname : "킹희재",
    latestChat : "홓홓홓~",
  },
  {
    id : 9,
    nickname : "전설의 판매자",
    latestChat : "연락 늦게 읽었네요~",
  },
  {
    id : 10,
    nickname : "멘종맨",
    latestChat : "이제서야 봤어요~",
  },
  {
    id : 11,
    nickname : "네고부탁맨",
    latestChat : "네고해주시면 감사하겠습니다.~",
  },
  {
    id : 12,
    nickname : "더미맨",
    latestChat : "덤덤덤덤덤덤~",
  },
  {
    id : 13,
    nickname : "킹대현",
    latestChat : "아~핫핫핫핫",
  },
  {
    id : 14,
    nickname : "킹영우",
    latestChat : "에헤헤~",
  },
  {
    id : 15,
    nickname : "킹상혁",
    latestChat : "힣",
  },
  {
    id : 16,
    nickname : "킹희재",
    latestChat : "홓홓홓~",
  }
];

const ChatList =({navigation})=> {
  const [chatList,setChatList] = useState([]);

  const renderChatRoom =({item})=> {
    console.log(item);
    return(
      <EachChatList roomCode={item.roomCode} navigation={navigation} seller={item.seller} buyer={item.buyer} />
    )
  }

  const ChatListFetch =async()=>{
    const result = await ChatFetch.ChatListFetchAPI();
    if(result.statusCode===200){
      // 응답에 성공하였다.
      setChatList(result.data);
    }else{
      // 에러 처리
      alert('채팅 리스트를 불러오는데 실패하였다.');
    }
  }

  useEffect(()=>{
    ChatListFetch();
  },[])
  return(
    <View>
      <FlatList
        data={chatList}
        renderItem={renderChatRoom}
        keyExtractor={item=>item._id}
      />
    </View>
  )
}

export default ChatList;