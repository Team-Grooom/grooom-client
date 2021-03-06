import React from 'react';
import styled from 'styled-components/native';
import Input from 'src/component/atom/input';
import Icon from 'react-native-vector-icons/AntDesign';

/*RegisterParameter{
  location	string
  TODO: nickName	string
  phoneNumber	integer($int64)
  }*/

// View, Flex 1 to Parent Component
const Wrapper = styled.View`
  display : flex;
  width : 80%;
  align-items : center;
  justify-content : center;
`;

const NicknameFormInput =({onChange})=> {
  return(
    <Wrapper>
      <Input placeholder="닉네임을 입력하세요" label="닉네임" leftIcon={<Icon name="adduser"/>} onChange={onChange}/>
    </Wrapper>
  )
}

export default NicknameFormInput;