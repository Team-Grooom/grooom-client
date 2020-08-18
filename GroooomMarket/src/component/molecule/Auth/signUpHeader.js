import React from 'react';
import HeaderWrapper from 'src/component/atom/headerWrapper';
import Label from 'src/component/atom/label';

const SignUpHeader =()=> {
  return(
    <HeaderWrapper color="white">
      <Label text="회원가입" color="black" size="20"/>
    </HeaderWrapper>
  )
}

export default SignUpHeader;