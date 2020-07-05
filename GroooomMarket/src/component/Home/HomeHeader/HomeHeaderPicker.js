import React,{useState} from 'react';
import {} from 'react-native';
import {Picker} from '@react-native-community/picker';

const initialState = [
  {
    myArea : "자양동"
  },
  {
    myArea : "천호동"
  },
  {
    myArea : "역북동"
  }
];

const HomeHeaderPicker =()=> {

  const [myArea,setMyPickerList] = useState();

  return(
    <Picker
      selectedValue={myArea}
      style={{height:50, width:150}}
      onValueChange={(selectedArea,selectedAreaIndex)=>{
        setMyPickerList(selectedArea);
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