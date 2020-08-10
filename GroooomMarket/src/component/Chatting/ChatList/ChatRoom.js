import React from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import styled from 'styled-components/native';

const StyledView = styled.View`
  display : flex;
  margin : 10px;
  background-color : royalblue;
`;

const ChatRoom =(props)=> {

  const onClickChatRoom =()=> {
    // navigation 이동
  }

  return(
    <TouchableOpacity>
      <StyledView>
        <Text>{props.nickname}</Text>
        <Text>{props.latestChat}</Text>
      </StyledView>
    </TouchableOpacity>
  )
}

export default ChatRoom;