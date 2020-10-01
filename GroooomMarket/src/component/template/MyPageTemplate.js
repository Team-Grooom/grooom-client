import React from 'react';
import styled from 'styled-components/native';

import MyPageHeader from 'src/component/molecule/header/MyPageHeader';
import MyPageBody from 'src/component/organism/MyPageBody';

const MyPageTemplate = () => {
  return (
    <MyPageContainer>
      <MyPageHeader />
      <MyPageBody />
    </MyPageContainer>
  );
};

const MyPageContainer = styled.View`
  flex: 1;
`;

export default MyPageTemplate;
