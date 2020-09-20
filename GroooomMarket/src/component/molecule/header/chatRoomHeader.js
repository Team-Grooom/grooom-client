import React from 'react';
import styled from 'styled-components/native';

import HeaderWrapper from '../../atom/headerWrapper';

const ChatRoomHeader = ({userId = '킹구종구'}) => {
  return (
    <ChatRoomHeaderWrapper color="skyblue">
      <HeaderTitle>{userId}</HeaderTitle>
    </ChatRoomHeaderWrapper>
  );
};

const ChatRoomHeaderWrapper = styled(HeaderWrapper)`
  margin-bottom: 10px;
`;

const HeaderTitle = styled.Text`
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default ChatRoomHeader;
