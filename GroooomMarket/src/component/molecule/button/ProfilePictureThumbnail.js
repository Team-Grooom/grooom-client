import React from 'react';
import styled from 'styled-components/native';

import PictureThunbnail from 'src/component/atom/thumbNailImage';
import Label from 'src/component/atom/label';
import Space from 'src/component/atom/space';

const ProfilePictureThumbnail = ({
  profileUri,
  onPress,
  nickName = '머돌이의가짜상점',
}) => {
  return (
    <ThumbnailContainer>
      <PictureThunbnail onPress={onPress} source={profileUri} size={100} />
      <Space size="8" />
      <Label color="black" size="16" text={nickName} />
    </ThumbnailContainer>
  );
};

const ThumbnailContainer = styled.View`
  padding: 4px;
  align-items: center;
  justify-content: center;
`;

export default ProfilePictureThumbnail;
