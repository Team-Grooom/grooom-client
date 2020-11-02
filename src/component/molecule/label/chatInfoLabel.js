import React from 'react';
import Label from 'src/component/atom/label';
import styled from 'styled-components/native';

const StyledColumnView = styled.View`
  flex-direction : column;
  justify-content : center;
  padding : 10px;
`;

/* TODO:  유저 이름, 
  마지막 메시지 내용(...필요), 
  마지막 메시지 날짜
*/

const ChatInfoLabel =({userName,lastChatMsg,lastChatDate})=> {
  return(
    <StyledColumnView>
      <Label text={userName} color="gray" size="20" />
      <Label text={lastChatMsg} color="gray" size="15" />
      <Label text={lastChatDate} color="gray" size="10" />
    </StyledColumnView>
  )
}

export default ChatInfoLabel;