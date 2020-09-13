import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import ChatListHeader from 'src/component/molecule/header/chatListHeader';
import ChatListBody from 'src/component/organism/chatListBody';
import ChatListItem from 'src/component/molecule/listItem/chatListItem';
import styled from 'styled-components/native';

const ChatListView = styled.View`
  background-color: white;
  height: 100%;
`;

const ChatListTemplate = ({chatFetch, navigation, navigateToChatRoom}) => {
  // chatList State
  const [chatList, setChatList] = useState([]);

  // Fetch Data 처리
  const updateChatList = async () => {
    const result = await chatFetch();
    console.log('반환값: ' + result);
    if (result.statusCode === 200) {
      // success
      setChatList(result.data);
    } else {
      // fail
      alert('채팅 리스트를 가져오는데 실패하였습니다.');
    }
  };

  // set ChatList when DOM did Mount
  useEffect(() => {
    updateChatList();
  }, []);

  // TODO: source,lastChatMsg, lastChatDate is dummy url
  const renderChatListItem = ({item}) => {
    return (
      <ChatListItem
        navigation={navigation}
        onPress={navigateToChatRoom}
        id={item._id}
        source={'https://via.placeholder.com/150'}
        userName={item.seller}
        roomCode={item.roomCode}
        lastChatMsg={'최근 대화 내역'}
        lastChatDate={'날짜 받아오기'}
      />
    );
  };

  return (
    <ChatListView>
      <ChatListHeader />
      <ChatListBody
        navigation={navigation}
        onPress={navigateToChatRoom}
        chatData={chatList}
        renderItem={renderChatListItem}
        selectKey={item => item.id}
      />
    </ChatListView>
  );
};

export default ChatListTemplate;
