import React from 'react';
import {FlatList, View} from 'react-native';
import styled from 'styled-components/native';

import ChatRoomTextField from 'src/component/molecule/input/chatInput';

const ChatRoomBody = ({renderChatbody, chatlist = [], onTextChange, text}) => {
  return (
    <BodyWrapper>
      <FlatList renderItem={renderChatbody} data={chatlist} />
      <ChatRoomTextField onTextChange={onTextChange} text={text} />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.View`
  flex: 1;
`;

export default ChatRoomBody;
