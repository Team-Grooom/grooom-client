import React from 'react';
import styled from 'styled-components/native';

import HeaderWrapper from '../../atom/headerWrapper';

const ChatRoomHeader = ({userId = '아무개'}) => {
  return (
    <HeaderWrapper color="skyblue">
      <HeaderTitle>{userId}</HeaderTitle>
    </HeaderWrapper>
  );
};

const HeaderTitle = styled.Text`
  font-size: 15px;
`;

export default ChatRoomHeader;
