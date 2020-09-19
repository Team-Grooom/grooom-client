import React from 'react';
import styled from 'styled-components/native';

import TextField from 'src/component/atom/textField';
import IconButton from 'src/component/atom/iconButton';

const ChatInput = ({onTextChange, text}) => {
  return (
    <ChatInputWrapper>
      <TextField
        onTextChange={onTextChange}
        placehodler="메시지를 입력하세요.."
        text={text}
      />
      <IconButton name="message1" size={10} />
    </ChatInputWrapper>
  );
};

const ChatInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export default ChatInput;
