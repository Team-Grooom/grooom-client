import React from 'react';
import { View,Text } from 'react-native';
import Input from 'src/component/atom/input';
import Label from 'src/component/atom/label';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

// View, Flex 1 to Parent Component
const Wrapper = styled.View`
  display : flex;
  align-items : center;
  justify-content : center;
`;

const PhoneNumberFormInput=({onChange})=>{
  return(
    <Wrapper>
      <Label text="전화번호" color="black" size="20"></Label>
      <Input placeholder="전화번호를 입력하세요"  leftIcon={<Icon name="phone"/>} onChange={onChange}/>
    </Wrapper>
  )
}

export default PhoneNumberFormInput;