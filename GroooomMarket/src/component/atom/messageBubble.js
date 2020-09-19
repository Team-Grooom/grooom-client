import React from 'react';
import styled from 'styled-components/native';

const MessageBubble = ({text = '텍스트 기본값', isMe = true}) => {
  return (
    <BubbleWrapper isMe={isMe}>
      <BubbleText>{Text}</BubbleText>
    </BubbleWrapper>
  );
};

const BubbleWrapper = styled.View`
  background-color: ${props => (props.isMe ? 'blue' : 'red')};
`;

const BubbleText = styled.Text``;

export default MessageBubble;
