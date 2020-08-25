import React from 'react';
import HeaderWrapper from 'src/component/atom/headerWrapper';
import Label from 'src/component/atom/label';
import Animate from 'src/component/atom/animate';
import styled from 'styled-components/native';

const StyledHeaderWrapper = styled(HeaderWrapper)`
  display : flex;
`;

const SignUpHeader =()=> {
  return(
    <StyledHeaderWrapper color="white">
      <Animate size="100" route="assets/lottiefiles/cloud-lottie-splash2.json" />
      <Label text="구름마켓에 오신걸 환영합니다!" color="black" size="40"/>
    </StyledHeaderWrapper>
  )
}

export default SignUpHeader;