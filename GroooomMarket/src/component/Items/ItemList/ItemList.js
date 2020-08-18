import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {UserState} from '../../../../store/store';
import EachItem from './EachItemList';

// 자양동 , 청운 효자동, 역북동 파싱
const DummyFetchData = [
  {
    itemId: 22923,
    itemName: '색동 저고리',
    salesLocation: '광진구',
    price: 10000,
    like: 4,
    chat: 2,
  },
  {
    itemId: 325,
    itemName: '빈티지 청바지(남자)',
    salesLocation: '종로구',
    price: 10000,
    like: 4,
    chat: 2,
  },
  {
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
  },
  {
    itemId: 22111,
    itemName: '자양골목 시장 후드티(XL)',
    salesLocation: '광진구',
    price: 10000,
    like: 4,
    chat: 0,
  },
  {
    itemId: 32512,
    itemName: '빈티지 청바지(여자)',
    salesLocation: '종로구',
    price: 10000,
    like: 4,
    chat: 2,
  },
  {
    itemId: 2512435,
    itemName: '플레이 스테이션 4',
    salesLocation: '광진구',
    price: 10000,
    like: 0,
    chat: 2,
  },
];

const ItemList = ({navigation}) => {
  const [DummyList] = useState(DummyFetchData);
  const [userContext] = useContext(UserState);

  const OnItemClicked = items => {
    navigation.navigate('Item');
  };

  return (
    <View>
      {DummyList.map((item, i) => {
        if (item.salesLocation === userContext.myArea) {
          return <EachItem key={i} navigation={navigation} item={item} />;
        }
      })}
    </View>
  );
};

const Wrapper = styled(View)`
  flex: 1;
`;

export default ItemList;
