import React from 'react';

import AreaSettingBody from 'src/component/organism/Settings/AreaSettingBody';
import AreaSettingHeader from 'src/component/molecule/header/AreaSettingHeader';

const AreaSettingTemplate = ({getTownByLevel}) => {
  return (
    <>
      <AreaSettingHeader />
      <AreaSettingBody getTownByLevel={getTownByLevel} />
    </>
  );
};

export default AreaSettingTemplate;
