import React from 'react';
import HeaderWrapper from 'src/component/atom/headerWrapper';
import Label from 'src/component/atom/label';
import Animate from 'src/component/atom/animate';

const SignUpHeader =()=> {
  return(
    <HeaderWrapper color="white">
      <Animate size="100" route="assets/lottiefiles/cloud-lottie-splash2.json" />
      <Label text="구름마켓에 오신걸 환영합니다!" color="black" size="25"/>
    </HeaderWrapper>
  )
}

export default SignUpHeader;