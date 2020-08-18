import React from 'react';
import { View } from 'react-native';
import NicknameFormInput from 'src/component/molecule/Auth/nicknameFormInput';
import PhoneNumberFormInput from 'src/component/molecule/Auth/phoneNumberFormInput';
import RegionPicker from 'src/component/molecule/Auth/regionPicker';
import SignUpSubmitButton from 'src/component/molecule/Auth/signUpSubmitButton';
import styled from 'styled-components/native';

const StyledView = styled.View`
  display : flex;
  flex-direction : column;
`;

const SignUpFormBody =({onChange,onPress})=> {
  return(
    <StyledView>
      <NicknameFormInput onChage={onChange}/>
      <PhoneNumberFormInput onChange={onChange}/>
      <RegionPicker onChange={onChange}/>
      <SignUpSubmitButton onPress={onPress}/>
    </StyledView>
  )
}

export default SignUpFormBody;