import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
import AreaSettingAnimation from 'src/component/molecule/Animation/AreaSettingAnimation';
import AreaSlider from 'src/component/molecule/slider/AreaSlider';

const AreaSettingBody = ({getTownByLevel}) => {
  const [areaLevel, setAreaLevel] = useState(1);
  const [locationAuthority, setLocationAuthority] = useState(false);
  const [userLocation, setUserLocation] = useState({});

  const checkUserLocationAuthority = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted) {
      setLocationAuthority(true);
    } else {
      const isAuthority = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: '구름마켓에서 회원님의 위치 정보가 필요해요.',
          message:
            '동의해 주신다면, 구름마켓의 서비스 이용이 원활하게 가능합니다. ',
          buttonNegative: '거부',
          buttonPositive: '동의하기',
        },
      );
      setLocationAuthority(isAuthority);
    }
  };

  // TODO: 마운트 될 때, 위치 권한 확인
  useEffect(() => {
    checkUserLocationAuthority();
  }, []);

  useEffect(() => {
    if (locationAuthority) {
      // 위치 권한이 승인되었다면?
      Geolocation.getCurrentPosition(
        position => {
          setUserLocation(position);
        },
        error => {
          // 에러 핸들러 만들어야함.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  }, [locationAuthority]);

  useEffect(() => {
    console.log(areaLevel);
  }, [areaLevel]);

  return (
    <AreaSettingContainer>
      <AreaSlider sliderValue={areaLevel} onSliderChange={setAreaLevel} />
      <AreaSettingAnimation areaLevel={areaLevel} />
    </AreaSettingContainer>
  );
};

const AreaSettingContainer = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 20px;
  padding-right: 20px;
`;

export default AreaSettingBody;
