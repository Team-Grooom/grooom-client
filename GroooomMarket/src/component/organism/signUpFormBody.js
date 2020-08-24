import React from 'react';
import { View } from 'react-native';
import NicknameFormInput from 'src/component/molecule/input/nicknameFormInput';
import PhoneNumberFormInput from 'src/component/molecule/input/phoneNumberFormInput';
import RegionPicker from 'src/component/molecule/picker/regionPicker';
import SignUpSubmitButton from 'src/component/molecule/button/signUpSubmitButton';
import styled from 'styled-components/native';

const StyledButton = styled(SignUpSubmitButton)`
  align-self: center;
`;

const BodyView = styled.View`
  margin-top : 50%;
  display : flex;
  justify-content : flex-start;
  height : 100%;
`;

const SignUpFormBody =({data=null,selectedValue,onChangeNickname,onChangePhoneNumber,onChangeLocation,onPress})=> {
  return(
    <BodyView>
      <NicknameFormInput onChange={onChangeNickname}/>
      <PhoneNumberFormInput onChange={onChangePhoneNumber}/>
      <RegionPicker selectedValue={selectedValue} data={data} onChange={onChangeLocation}/>
      <StyledButton onPress={onPress}/>
    </BodyView>
  )
}

export default SignUpFormBody;