import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components';

import ChatRoomHeader from 'src/component/molecule/header/chatRoomHeader';
import ChatRoomBody from 'src/component/organism/chatRoomBody';
import MessageBubble from 'src/component/atom/messageBubble';

const DummyChat = [
  {
    id: '김대현',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:22',
  },
  {
    id: '김민종',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:23',
  },
  {
    id: '김대현',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:24',
  },
  {
    id: '김민종',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:25',
  },
  {
    id: '김대현',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:26',
  },
  {
    id: '김민종',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:27',
  },
  {
    id: '김대현',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:22',
  },
  {
    id: '김민종',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:23',
  },
  {
    id: '김대현',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:24',
  },
  {
    id: '김민종',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:25',
  },
  {
    id: '김대현',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:26',
  },
  {
    id: '김민종',
    message: 'ㅎㅇㅎㅇ',
    date: '2020-09-20 03:27',
  },
];

const ChatRoomTemplate = () => {
  // TODO: Flatlist 하단 스크롤 고정용 Ref
  const chatMessageRef = useRef(null);

  // TODO: 채팅 input 상태관리
  const [chatText, setChatText] = useState('');

  // TODO: 채팅 메시지 데이터 상태관리
  const [chatData, setChatData] = useState();

  // TODO: 채팅 인풋 이벤트
  const onChangeChatInput = value => {
    setChatText(value);
  };

  // 하단 플랫리스트 데이터 렌더링 시 스크롤 고정
  useEffect(() => {
    chatMessageRef.current.scrollToEnd();
  }, [chatData]);

  //TODO: FlatList 렌더 이벤트
  const renderChatBody = ({item}) => {
    if (item.id === '김대현') {
      return <MessageBubble text={item.message} isMe={true} />;
    }
    return <MessageBubble text={item.message} isMe={false} />;
  };

  return (
    <>
      <ChatRoomHeader />
      <ChatRoomBody
        chatMessageRef={chatMessageRef}
        data={DummyChat}
        renderChatBody={renderChatBody}
        onTextChange={onChangeChatInput}
        text={chatText}
      />
    </>
  );
};

export default ChatRoomTemplate;
