import React from 'react';
import styled from 'styled-components/native';
import Input from 'src/component/atom/input';
import Label from 'src/component/atom/label';
import Icon from 'react-native-vector-icons/AntDesign';

/*RegisterParameter{
  location	string
  TODO: nickName	string
  phoneNumber	integer($int64)
  }*/

// View, Flex 1 to Parent Component
const Wrapper = styled.View`
  display : flex;
  align-items : center;
  justify-content : center;
`;

const NicknameFormInput =({onChange})=> {
  return(
    <Wrapper>
      <Label text="별명" color="black" size="20"></Label>
      <Input placeholder="별명을 입력하세요"  leftIcon={<Icon name="adduser"/>} onChange={onChange}/>
    </Wrapper>
  )
}

export default NicknameFormInput;