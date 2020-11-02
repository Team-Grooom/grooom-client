import React from 'react';
import styled from 'styled-components/native';

import Label from 'src/component/atom/label';

const ProfileSettingButton = ({onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Label text="프로필 설정" size={16} color="white" />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: skyblue;
  border-width: 1px;
  border-color: white;
  border-radius: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default ProfileSettingButton;
