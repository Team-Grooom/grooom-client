import React from 'react';
import styled from 'styled-components/native';

import MyPageHeader from 'src/component/molecule/header/MyPageHeader';
import MyPageBody from 'src/component/organism/MyPage/MyPageBody';

const MyPageTemplate = ({navigation}) => {
  return (
    <MyPageContainer>
      <MyPageHeader />
      <MyPageBody navigation={navigation} />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.View`
  flex: 1;
`;

export default MyPageTemplate;
