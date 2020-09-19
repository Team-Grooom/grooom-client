import React, {useState} from 'react';
import styled from 'styled-components';

import ChatRoomHeader from 'src/component/molecule/header/chatRoomHeader';
import ChatRoomBody from 'src/component/organism/chatRoomBody';
import MessageBubble from 'src/component/atom/messageBubble';

const ChatRoomTemplate = () => {
  // TODO: 채팅 input 상태관리
  const [chatText, setChatText] = useState('');

  // TODO: 채팅 인풋 이벤트
  const onChangeChatInput = value => {
    setChatText(value);
  };

  //TODO: FlatList 렌더 이벤트
  const renderChatBody = ({item}) => {
    return <MessageBubble />;
  };

  return (
    <>
      <ChatRoomHeader />
      <ChatRoomBody
        renderChatBody={renderChatBody}
        onTextChange={onChangeChatInput}
        text={chatText}
      />
    </>
  );
};

export default ChatRoomTemplate;
