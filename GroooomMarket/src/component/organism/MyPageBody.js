import React from 'react';
import styled from 'styled-components/native';

import TextMenuButton from 'src/component/molecule/button/TextMenuButton';
import ProfilePictureThumbnail from 'src/component/molecule/button/ProfilePictureThumbnail';
import ProfileSettingButton from 'src/component/molecule/button/ProfileSettingButton';
import SellLogButton from 'src/component/molecule/button/SellLogButton';

const MyPageBody = () => {
  return (
    <BodyContainer>
      <ProfileSettingWrapper>
        <ProfilePictureThumbnail
          onPress={() => {
            alert('프로필 사진 설정');
          }}
          profileUri="https://dummyimage.com/400x400/a3cbf0/1c88e6.png&text=Profile"
        />
        <ProfileSettingButton onPress={() => alert('프로필 설정으로 이동')} />
      </ProfileSettingWrapper>
      <TransactionWrapper>
        <SellLogButton
          onPressBuy={() => {
            alert('아이콘 누름');
          }}
          onPressSell={() => {
            alert('아이콘 누름');
          }}
          onPressStar={() => {
            alert('아이콘 누름');
          }}
        />
      </TransactionWrapper>
      <SettingWrapper>
        <TextMenuButton
          title="지역 설정하기"
          onPress={() => alert('지역설정')}
          textSize="24"
        />
      </SettingWrapper>
      <SettingWrapper>
        <TextMenuButton
          title="앱 설정하기"
          onPress={() => alert('앱 설정')}
          textSize="24"
        />
      </SettingWrapper>
      <SettingWrapper>
        <TextMenuButton
          title="문의 하기"
          onPress={() => alert('앱 설정')}
          textSize="24"
        />
      </SettingWrapper>
      <SettingWrapper>
        <TextMenuButton
          title="맹글은 사람들"
          onPress={() => alert('앱 설정')}
          textSize="24"
        />
      </SettingWrapper>
    </BodyContainer>
  );
};

const SettingWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: lavender;
`;

const TransactionWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 36px;
  padding-bottom: 36px;
  border-bottom-width: 1px;
  border-color: lavender;
`;

const ProfileSettingWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: lavender;
`;

const BodyContainer = styled.View`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  background-color: white;
`;

export default MyPageBody;
