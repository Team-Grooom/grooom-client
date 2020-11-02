import React from 'react';
import fetch from 'node-fetch';
import AreaSettingTemplate from 'src/component/template/AreaSettingTemplate';

const AreaSettingView = ({navigation}) => {
  const getTownByLevel = async (town, townRange) => {
    return await fetch(
      `34.64.183.110:3000/town?=${town}&townRange=${townRange}`,
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
      },
    ).then(res => res.json());
  };

  return <AreaSettingTemplate getTownByLevel={getTownByLevel} />;
};

export default AreaSettingView;
