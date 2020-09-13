import React from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import styled from 'styled-components/native';
import ChatRoom from 'src/component/Chatting/ChatRoom/ChatRoom';
import {createStackNavigator} from '@react-navigation/stack';

const StyledButton = styled.TouchableOpacity`
  border-bottom-width : 1px;
  border-color : #e0e0eb;
  
`;

const StyledView = styled.View`
  display : flex;
  margin : 10px;
`;

const StyledTitle = styled.Text`
  margin : 10px;
  font-family : "NanumMyeongjo-ExtraBold";
  font-size : 20px;
`;

const StyledDescription = styled(StyledTitle)`
  font-size : 15px;
`;

const EachChatList =(props)=> {

  const onClickChatRoom =()=> {
    // navigation 이동
    props.navigation.navigate("ChatRoomModal",{
      buyer : props.buyer,
      seller : props.seller,
      roomCode : props.roomCode
    });
  }

  return(
    <StyledButton onPress={onClickChatRoom}>
      <StyledView>
        <Text>{"Buyer : "+props.buyer}</Text>
        <StyledTitle>{"Seller : "+props.seller}</StyledTitle>
      </StyledView>
    </StyledButton>
  )
}

export default EachChatList;