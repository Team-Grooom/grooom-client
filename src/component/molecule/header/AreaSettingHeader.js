import React from 'react';
import styled from 'styled-components';

import Label from 'src/component/atom/label';

const AreaSettingHeader = () => {
  return (
    <AreaSettingHeaderWrapper>
      <Label text="내 지역 설정하기" color="black" size="30" />
    </AreaSettingHeaderWrapper>
  );
};

const AreaSettingHeaderWrapper = styled.View`
  background-color: skyblue;
  padding: 4px;
`;

export default AreaSettingHeader;
