import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
const Color = require("assets/color");

const MyTransaction =()=> {
  return(
    <View style={Style.container}>
      <View style={Style.iconContainer}>
        <TouchableOpacity style={Style.iconButton}>
          <Icon style={{fontSize:30,color:Color.sellingListIcon,alignSelf:"center"}} name="receipt"></Icon>
          <Text style={Style.text}>판매내역</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.iconContainer}>
        <TouchableOpacity style={Style.iconButton}>
          <Icon style={{fontSize:30,color:Color.buyingListIcon,alignSelf:"center"}} name="card"></Icon>
          <Text style={Style.text}>구매내역</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.iconContainer}>
        <TouchableOpacity style={Style.iconButton}>
          <Icon style={{fontSize:30,color:Color.starListIcon,alignSelf:"center"}} name="heart-circle-outline"></Icon>
          <Text style={Style.text}>관심목록</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Style=StyleSheet.create({
  iconContainer : {
    marginTop : 30,
    marginBottom : 30,
    width:100,
    height:70,
    justifyContent:"center",
    alignContent:"center",
  },
  container : {
    flexDirection:"row",
    justifyContent:"space-around",
    borderBottomWidth:1,
    borderColor:Color.lightPurple
  },
  iconButton : {
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignContent:"center",
  },
  text : {
    textAlign:"center",
    fontFamily : "NanumMyeongjo-Bold",
    fontSize:20,
  }
});

export default MyTransaction;