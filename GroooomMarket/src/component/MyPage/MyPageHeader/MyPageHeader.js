import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const HeaderTextStyle = require('assets/styles/conceptStyle');

const MyPageHeader =({navigation})=>{

  const onClickMyPageHeaderBtn =()=>{
    // navigate to Profie Setting Screen
    navigation.navigate();
  }

  return(
    <View style = {myPageStyle.container}>
      <View style ={myPageStyle.innerContainer}>
        <Text style={HeaderTextStyle.HeaderFont}>
          마이 페이지
        </Text>
        <TouchableOpacity style={myPageStyle.settingButton}>
          <Icon style={myPageStyle.icon} name="cog-outline"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MyPageHeader;

const myPageStyle = StyleSheet.create({
  settingButton : {
    display:"flex",
    alignItems: "center",
    justifyContent:"center",
    marginRight:0
  },
  ButtonText : {
    margin:5,
    fontSize:15,
  }, 
  HeaderText : {
    fontSize: 20
  },
  innerContainer : {
    margin : 10,
    flexDirection : "row",
    justifyContent:"space-between"
  },
  container:{
    backgroundColor:"#99ccff",
  },
  icon:{
    color:"#e6f2ff",
    fontSize:30
  }
});