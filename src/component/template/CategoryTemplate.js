import IconButton from '../atom/iconButton';
import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const CategoryTemplate = ({navigation}) => {
  return (
    <CategoryContainer>
      <Title>카테고리</Title>
      <CategoryIconArea>
        <CategoryIcon>
          <CategoryIconText>디지털/가전</CategoryIconText>
        </CategoryIcon>
        <IconButton name={'tags'} size={10} color={'cadetblue'} />
        <CategoryIcon />
        <CategoryIcon />
        <CategoryIcon />
      </CategoryIconArea>
    </CategoryContainer>
  );
};

const CategoryIconText = styled.Text``;

const CategoryIcon = styled.View`
  background-color: gray;
  margin: 10px;
  width: 70px;
  height: 70px;
`;

const CategoryIconArea = styled.View`
  background-color: red;
  margin-top: 20px;
  flex: 1;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
`;

const CategoryContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  margin: 15px;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default CategoryTemplate;
