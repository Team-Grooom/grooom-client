import React,{useState,useEffect} from 'react';
import {View,Text,FlatList} from  'react-native';
import ChatRoom from 'src/component/Chatting/ChatList/ChatRoom';

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
  const [dummyList,setDummyList] = useState([]);

  const renderChatRoom =({item})=> {
    return(
      <ChatRoom navigation={navigation} id={item.id} nickname={item.nickname} latestChat={item.latestChat}/>
    )
  }

  useEffect(()=>{
    setDummyList(dummyChatList); // set chat list as State
  },[])
  return(
    <View>
      <FlatList
        data={dummyList}
        renderItem={renderChatRoom}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

// const ChatStack = createStackNavigator(); // 채팅방을 열어줄 채팅 리스트

// const ChattingNavigator =()=> {
//   <ChatStack.Navigator>
//     <ChatStack.Screen name="ChatList" component={ChatList}></ChatStack.Screen>

//   </ChatStack.Navigator>
// }

export default ChatList;