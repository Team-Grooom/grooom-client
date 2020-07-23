import React,{useState} from 'react';
import {View,Text,Image,TouchableOpacity,Button,StyleSheet} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';
const Color = require('assets/color');
const dummyUserInfo = {
  userProfileImage:true,
}

const ProfileView =()=>{

  const [userInfoFetch,setUserInfoFetch] = useState(dummyUserInfo);

  const OnClickShowProfileBtn =()=>{
    // navigate to Profile Setting
    alert("프로필 설정 화면으로 이동");
  }

  return(
    <View style = {profileViewStyle.container} >
      <View style={profileViewStyle.profileContainer}>
        <TouchableOpacity style={profileViewStyle.profileButton}>
          <View style={profileViewStyle.imageContainer}>
            <Image style={profileViewStyle.profilePicture} source={require('../../../../assets/picture/teampic.png')}></Image>
          </View>
        </TouchableOpacity>
        <Text style={profileViewStyle.nameText}>머릉이</Text>
        <Text style={profileViewStyle.areaText}>자양동</Text>
      </View>
      <TouchableOpacity style={profileViewStyle.showProfileButton} onPress={OnClickShowProfileBtn}>
        <Text style={{fontFamily:"NanumMyeongjo-Regular",fontSize:16,margin:10}}>
          프로필 설정
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileView;

const profileViewStyle = StyleSheet.create({
  showProfileButton : {
    alignSelf:"center",
    height : 50,
    borderColor: Color.lightPurple,
    borderWidth : 1,
    justifyContent:"center",
    borderRadius:10,
    flexWrap:"wrap",
  },
  nameText : {
    fontFamily:"NanumMyeongjo-Regular",
    fontSize : 20,
    margin : 10,
    textAlign:"center",
  },
  areaText : {
    fontFamily:"NanumMyeongjo-Regular",
    fontSize : 10,
    color:"gray",
    textAlign:"center"
  },
  container : {
    borderColor : Color.lightPurple,
    flexDirection : "row",
    justifyContent : "space-around",
    borderBottomWidth:1,
    margin : 5
  },
  profileContainer : {
    alignItems:"center",
    justifyContent: "center",
    margin:10,
  },
  imageContainer : {
    borderColor:Color.lightPurple,
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    flexShrink:1
  },
  profileButton : {
    width:150,
    height:150,
    borderWidth:1,
    borderRadius:100,
    borderColor:Color.lightPurple,
    alignContent:"center",
    justifyContent: 'center',
    textAlign:"center",
    overflow: 'hidden',
  },
  profilePicture : {
    resizeMode:"cover",
    width:"100%",
    height:"102%"
  }
});