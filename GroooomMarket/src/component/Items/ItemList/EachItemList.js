import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

const EachItemList = ({item, navigation}) => {
  const OnItemClicked = () => {
    navigation.navigate('Item');
  };

  const heartIconRender = like => {
    if (like !== 0) {
      return (
        <>
          <Icon name="heart-outline" size={20} />
          <IconInfo>{' ' + like + ' '}</IconInfo>
        </>
      );
    }
  };

  const chatIconRender = chat => {
    if (chat !== 0) {
      return (
        <>
          <Icon name="chatbubbles-outline" size={20} />
          <IconInfo>{' ' + chat + ' '}</IconInfo>
        </>
      );
    }
  };

  return (
    <Wrapper onPress={OnItemClicked}>
      <Thumbnail source={require('../../../../picture/teampic.png')} />
      <InfoContainer>
        <Title>{item.itemName}</Title>
        <Info>{item.salesLocation}</Info>
        <Price>{item.price + '원'}</Price>
        <IconContainer>
          {heartIconRender(item.like)}
          {chatIconRender(item.chat)}
        </IconContainer>
      </InfoContainer>
    </Wrapper>
  );
};

const IconInfo = styled.Text`
  font-size: 20px;
`;

const IconContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const Info = styled.Text`
  color: gray;
`;

const Title = styled.Text`
  font-size: 20px;
`;

const InfoContainer = styled.View`
  flex: 1;
  margin: 10px;
`;

const Wrapper = styled.TouchableOpacity`
  flex-direction: row;
  padding: 10px;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;

const Thumbnail = styled.Image`
  width: 100px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
`;

export default EachItemList;
