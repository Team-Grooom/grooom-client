import React, {useState, useContext, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components';
import {UserState} from '../../../store/store';
import EachItem from './EachItemList';

const ItemList = ({navigation}) => {
  const [board, setBoard] = useState([]);
  const [userContext] = useContext(UserState);
  const [page, setPage] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const getBoardData = () => {
    setBoard(
      refresh
        ? DummyFetchData.slice(0 + page * 10, 10)
        : board.concat(DummyFetchData.slice(0 + page * 10, 10 + page * 10)),
    );
    setRefresh(false);
  };

  useEffect(() => {
    getBoardData();
  }, [page]);

  const ItemRender = ({item}) => {
    if (item.salesLocation === userContext.myArea) {
      return <EachItem key={item.id} navigation={navigation} item={item} />;
    }
  };

  const loadMoreHandler = () => {
    getBoardData;
    setPage(page + 1);
  };

  const refreshHandler = () => {
    setRefresh(true);
    setPage(0);
    getBoardData;
  };

  return (
    <View>
      <FlatList
        data={board}
        renderItem={ItemRender}
        keyExtractor={(item, index) => item.id}
        onEndReached={loadMoreHandler}
        onEndReachedThreshold={0.5}
        refreshing={refresh}
        onRefresh={refreshHandler}
      />
    </View>
  );
};

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
  {
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
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
    itemId: 253,
    itemName: '닌텐도 스위치 동물의 숲',
    salesLocation: '광진구',
    price: 10000,
    like: 8,
    chat: 8,
  },
];

export default ItemList;
