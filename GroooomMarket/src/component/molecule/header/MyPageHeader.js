import React from 'react';
import styled from 'styled-components/native';
import HeaderWrapper from 'src/component/atom/headerWrapper';
import Label from 'src/component/atom/label';

import {space} from 'src/commons/Settings';

const MyPageHeader = () => {
  return (
    <MyPageHeaderWrapper color="skyblue">
      <Label text="마이페이지" color="black" size="20" />
    </MyPageHeaderWrapper>
  );
};

const MyPageHeaderWrapper = styled.View`
  background-color: skyblue;
  padding: ${space.small};
`;

export default MyPageHeader;
