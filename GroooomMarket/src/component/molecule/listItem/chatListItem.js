import React from 'react';
import {TouchableOpacity} from 'react-native';
import ThumbNailImage from 'src/component/atom/thumbNailImage';
import ChatInfoLabel from 'src/component/molecule/label/chatInfoLabel';
import styled from 'styled-components/native';

// TODO: 유저 이미지

const StyledButtonWrapper = styled.TouchableOpacity`
  padding: 10px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

const StyledRowView = styled.View`
  flex-direction: row;
`;

const ChatListItem = ({
  onPress,
  source,
  userName,
  lastChatMsg,
  lastChatDate,
  roomCode,
}) => {
  return (
    <StyledButtonWrapper onPress={onPress}>
      <StyledRowView>
        <ThumbNailImage size={100} source={source} />
        <ChatInfoLabel
          userName={userName}
          lastChatMsg={lastChatMsg}
          lastChatDate={lastChatDate}
        />
      </StyledRowView>
    </StyledButtonWrapper>
  );
};

export default ChatListItem;
