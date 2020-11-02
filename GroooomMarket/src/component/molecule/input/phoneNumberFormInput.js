import React from 'react';
import { View,Text } from 'react-native';
import Input from 'src/component/atom/input';
import Icon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

// View, Flex 1 to Parent Component
const Wrapper = styled.View`
  width : 80%;
  display : flex;
  align-items : center;
  justify-content : center;
  margin : 10px;
`;

const PhoneNumberFormInput=({onChange})=>{
  return(
    <Wrapper>
      <Input label="전화번호" placeholder="전화번호를 입력하세요"  leftIcon={<Icon name="phone"/>} onChange={onChange}/>
    </Wrapper>
  )
}

export default PhoneNumberFormInput;