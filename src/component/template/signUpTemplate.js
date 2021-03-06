import React, {useState} from 'react';
import {View, Text} from 'react-native';
import SignUpHeader from 'src/component/molecule/header/signUpHeader';
import SignUpFormBody from 'src/component/organism/SignUp/signUpFormBody';

const dummyRegion = [
  '강남구',
  '강동구',
  '강북구',
  '강서구',
  '관악구',
  '광진구',
  '구로구',
  '금천구',
  '노원구',
  '도봉구',
  '동대문구',
  '동작구',
  '마포구',
  '서대문구',
  '서초구',
  '성동구',
  '성북구',
  '송파구',
  '양천구',
  '영등포구',
  '용산구',
  '은평구',
  '종로구',
  '중구',
  '중랑구',
];

const SignUpInfo = {
  location: '',
  nickName: '',
  phoneNumber: '',
};

const SignUpTemplate = ({onPress}) => {
  const [userInfo, setUserInfo] = useState(SignUpInfo);

  // When User input data
  const onChangeNickname = text => {
    setUserInfo({
      ...userInfo,
      nickName: text,
    });
  };
  const onChangePhoneNumber = text => {
    setUserInfo({
      ...userInfo,
      phoneNumber: text,
    });
  };

  const onChangeLocation = text => {
    setUserInfo({
      ...userInfo,
      location: text,
    });
  };

  const onPressSubmitBtn = () => {
    onPress(userInfo);
  };

  return (
    <View>
      <SignUpHeader />
      <SignUpFormBody
        data={dummyRegion}
        onPress={onPressSubmitBtn}
        onChangeNickname={onChangeNickname}
        onChangePhoneNumber={onChangePhoneNumber}
        onChangeLocation={onChangeLocation}
        selectedValue={userInfo.location}
      />
    </View>
  );
};

export default SignUpTemplate;
