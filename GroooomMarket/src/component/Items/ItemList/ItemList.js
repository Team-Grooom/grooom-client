import React,{useState,useContext} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {UserState} from '../../../../store/store';

// 자양동 , 청운 효자동, 역북동 파싱
const DummyFetchData = [
  {
    itemId : 22923,
    itemName : "색동 저고리",
    salesLocation : "광진구"
  },
  {
    itemId : 325,
    itemName : "빈티지 청바지(남자)",
    salesLocation : "종로구"
  },
  {
    itemId : 253,
    itemName : "닌텐도 스위치 동물의 숲",
    salesLocation : "광진구"
  },
  {
    itemId : 22111,
    itemName : "자양골목 시장 후드티(XL)",
    salesLocation : "광진구"
  },
  {
    itemId : 32512,
    itemName : "빈티지 청바지(여자)",
    salesLocation : "종로구"
  },
  {
    itemId : 2512435,
    itemName : "플레이 스테이션 4",
    salesLocation : "광진구"
  },
]

const ItemList =()=>{

  const [DummyList,setDummyList]=useState(DummyFetchData);
  const [userContext,setUserContext]=useContext(UserState);

  const OnItemClicked =(items)=> {
    alert("아이템을 눌러서 화면을 이동해요");
  }

  return(
    <View>
      {
        DummyList.map((item,i)=>{
          console.log(userContext);
          if(item.salesLocation==userContext){
            return(
              <View key ={i}>
                <TouchableOpacity onPress={OnItemClicked}>
                  <Text>
                    {item.itemName}
                  </Text>
                  <Text>
                    {item.salesLocation}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
        })
      }
    </View>
  )
}

export default ItemList;