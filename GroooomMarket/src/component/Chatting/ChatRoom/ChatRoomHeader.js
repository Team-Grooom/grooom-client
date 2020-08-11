import React from 'react';
import {View,Text} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const HeaderTextStyle = require('assets/styles/conceptStyle');

const StyleView = styled.View`
  display : flex;
  margin : 10px;
  background-color: #99ccff;
  flex-direction : row;
  justify-content: space-between;
`;

const StyledIcon = styled(Icon)`
  color : #e6f2ff;
  font-size : 30;
`;

const ChatRoomHeader =(props)=> {
  return(
    <View style={{backgroundColor:"#99ccff"}}>
      <StyleView>
        <Text style={HeaderTextStyle.HeaderFont}>{props.nickname}</Text>
        <StyledIcon name="cog-outline"></StyledIcon>
      </StyleView>
    </View>
  )
}

export default ChatRoomHeader;