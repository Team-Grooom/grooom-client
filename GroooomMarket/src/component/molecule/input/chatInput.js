import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components/native';

import IconButton from 'src/component/atom/iconButton';

// TODO: Focused 시 효과를 주고 싶어 ref 로직이 추가됨.

const TextField = ({placeholder, onTextChange, text}) => {
  const TextInputRef = useRef(null);
  const [focusFlag, setFocusflag] = useState(false);

  useEffect(() => {
    if (TextInputRef.current.isFocused()) {
      setFocusflag(true);
    } else {
      setFocusflag(false);
    }
  }, [TextInputRef.current]);

  return (
    <TextWrapper isFocused={focusFlag}>
      <ChatTextInput
        ref={TextInputRef}
        placeholder={placeholder}
        placeholderTextColor="gray"
        onChangeText={onTextChange}
        value={text}
      />
      <SendButtonWrapper>
        <ChatSendButton name="message1" size={30} color="skyblue" />
      </SendButtonWrapper>
    </TextWrapper>
  );
};

const TextWrapper = styled.View`
  border-width: 1px;
  border-color: ${props => (props.isFocused ? 'skyblue' : 'gray')};
  border-radius: 20px;
  flex-direction: row;
`;

const ChatTextInput = styled.TextInput`
  flex: 8;
  padding-left: 15px;
`;

const SendButtonWrapper = styled.View`
  padding-right: 10px;
  justify-content: center;
`;

const ChatSendButton = styled(IconButton)`
  padding-right: 30px;
`;

export default TextField;
