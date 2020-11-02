import React from 'react';
import styled from 'styled-components/native';

const MessageBubble = ({text = '텍스트 기본값', isMe = true}) => {
  return (
    <MessageWrapper isMe={isMe}>
      <TextWrapper isMe={isMe}>
        <BubbleText>{text}</BubbleText>
      </TextWrapper>
    </MessageWrapper>
  );
};

const MessageWrapper = styled.View`
  flex-direction: row;
  justify-content: ${props => (props.isMe ? 'flex-end' : 'flex-start')};
`;

const TextWrapper = styled.View`
  background-color: ${props => (props.isMe ? 'lemonchiffon' : 'mintcream')};
  padding: 10px;
  border-width: 1px;
  border-radius: 20px;
  margin-bottom: 10px;
  border-color: gainsboro;
`;

const BubbleText = styled.Text``;

export default MessageBubble;
