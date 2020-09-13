import React from 'react'
import Button from 'src/component/atom/button';
import styled from 'styled-components';

const SubmitButtonView = styled.View`
  margin-bottom : 50px;
  width : 200px;
`;
const SignUpSubmitButton =({onPress})=> {
  return(
    <SubmitButtonView>
      <Button title="회원가입 하기" type="outline" onPress={onPress}/>
    </SubmitButtonView>
  )
}

export default SignUpSubmitButton;