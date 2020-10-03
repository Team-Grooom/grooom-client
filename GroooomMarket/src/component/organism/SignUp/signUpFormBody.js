import React from 'react';
import { View } from 'react-native';
import NicknameFormInput from 'src/component/molecule/input/nicknameFormInput';
import PhoneNumberFormInput from 'src/component/molecule/input/phoneNumberFormInput';
import RegionPicker from 'src/component/molecule/picker/regionPicker';
import SignUpSubmitButton from 'src/component/molecule/button/signUpSubmitButton';
import styled from 'styled-components/native';

const BodyView = styled.View`
  margin-top : 15%;
  display : flex;
  align-items : center;
  justify-content : flex-start;
`;

const SignUpFormBody =({data=null,selectedValue,onChangeNickname,onChangePhoneNumber,onChangeLocation,onPress})=> {
  return(
    <BodyView>
      <NicknameFormInput onChange={onChangeNickname}/>
      <PhoneNumberFormInput onChange={onChangePhoneNumber}/>
      <RegionPicker selectedValue={selectedValue} data={data} onChange={onChangeLocation}/>
      <SignUpSubmitButton onPress={onPress}/>
    </BodyView>
  )
}

export default SignUpFormBody;