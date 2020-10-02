import React from 'react';
import styled from 'styled-components/native';
import HeaderWrapper from 'src/component/atom/headerWrapper';
import Label from 'src/component/atom/label';

const MyPageHeader = () => {
  return (
    <MyPageHeaderWrapper color="skyblue">
      <Label text="마이페이지" color="black" size="30" />
    </MyPageHeaderWrapper>
  );
};

const MyPageHeaderWrapper = styled.View`
  background-color: skyblue;
  padding: 4px;
`;

export default MyPageHeader;
