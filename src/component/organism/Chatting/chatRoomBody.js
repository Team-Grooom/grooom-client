import React from 'react';
import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';

import ChatRoomTextField from 'src/component/molecule/input/chatInput';

const ChatRoomBody = ({
  chatMessageRef,
  data,
  renderChatBody,
  onTextChange,
  text,
}) => {
  return (
    <>
      <BodyWrapper>
        <FlatList
          inverted={true}
          ref={chatMessageRef}
          data={data}
          renderItem={renderChatBody}
        />
      </BodyWrapper>
      <ChatRoomTextField
        placeholder="메시지를 입력하세요."
        onTextChange={onTextChange}
        text={text}
      />
    </>
  );
};

const BodyWrapper = styled.View`
  flex: 1;
  background-color: white;
  margin-top: 10px;
`;

export default ChatRoomBody;
