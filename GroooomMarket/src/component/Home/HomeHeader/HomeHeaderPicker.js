import React,{useState,useContext,useEffect} from 'react';
import {} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {UserState} from '../../../../store/store';

const initialState = [
  {
    myArea : "광진구"
  },
  {
    myArea : "종로구"
  },
];

const HomeHeaderPicker =()=> {

  useEffect(()=>{
    setUserContext(myArea);
  })

  const [myArea,setMyPickerList] = useState();
  const [userContext,setUserContext] = useContext(UserState);
  return(
    <Picker
      selectedValue={myArea}
      style={{height:50, width:150}}
      onValueChange={(selectedArea,selectedAreaIndex)=>{
        setMyPickerList(selectedArea);
        console.log(selectedArea);
        setUserContext(selectedArea);
      }}
    >
      {initialState.map((myAreaList,i)=>{
      return (
        <Picker.Item key={i} label={myAreaList.myArea} value={myAreaList.myArea}/>
      );
      })}
    </Picker>
  )
}

export default HomeHeaderPicker;