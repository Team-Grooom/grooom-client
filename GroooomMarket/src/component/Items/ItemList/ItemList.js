import React from 'react';
import {View} from 'react-native';

// 자양동 , 청운 효자동, 역북동 파싱
const DummyFetchData = [
  {
    itemId : 22923,
    itemName : "색동 저고리",
    salesLocation : "서울시 광진구 자양동"
  },
  {
    itemId : 325,
    itemName : "빈티지 청바지(남자)",
    salesLocation : "서울시 종로구 청운효자동"
  },
  {
    itemId : 253,
    itemName : "닌텐도 스위치 동물의 숲",
    salesLocation : "서울시 광진구 자양동"
  },
  {
    itemId : 2,
    itemName : "쓸모 없는 나의 군복",
    salesLocation : "경기도 용인시 처인구 역북동"
  },
  {
    itemId : 22111,
    itemName : "자양골목 시장 후드티(XL)",
    salesLocation : "서울시 광진구 자양동"
  },
  {
    itemId : 32512,
    itemName : "빈티지 청바지(여자)",
    salesLocation : "서울시 종로구 청운효자동"
  },
  {
    itemId : 2512435,
    itemName : "플레이 스테이션 4",
    salesLocation : "서울시 광진구 자양동"
  },
  {
    itemId : 2111174,
    itemName : "쓸모 없는 당근",
    salesLocation : "경기도 용인시 처인구 역북동"
  },
]

const ItemList =()=>{
  return(
    <View>
      <Text>
        아이템 리스트를 전체적으로 표시할 꺼야
      </Text>
    </View>
  )
}