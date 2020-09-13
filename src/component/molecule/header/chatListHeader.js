import React from 'react';
import IconButton from 'src/component/atom/iconButton';
import Label from 'src/component/atom/label';
import styled from 'styled-components/native';

const StyledHeaderWrapper = styled.View`
  flex-direction : row;
  background-color : skyblue;
  justify-content : space-between;
  padding : 10px;
`;

const ChatListHeader =()=> {
  return(
    <StyledHeaderWrapper color="lightgray">
      <Label text="채팅" color="black" size="30"/>
      <IconButton name="setting" size={30} />
    </StyledHeaderWrapper>
  )
}

export default ChatListHeader;