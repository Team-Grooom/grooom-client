import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

const EachItemList =(props)=> {

  const OnItemClicked =()=>{
    props.navigation.navigate("Item");
  }

  return(
    <View key={props.key}>
      <Image style={{width:20, height:20}}
        source={require('../../../../picture/teampic.png')}
      />
      <TouchableOpacity onPress={OnItemClicked}>
        <Text>
          {props.itemName}
        </Text>
        <Text>
          {props.salesLocation}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default EachItemList;