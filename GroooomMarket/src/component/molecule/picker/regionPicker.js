import React from 'react';
import { View } from 'react-native';
import {Picker} from '@react-native-community/picker';
import Label from 'src/component/atom/label';
import styled from 'styled-components/native';
// TODO: Items mean Picker.item

const StyledView = styled.View`
  margin : 10px;
  width : 350px;
  border-width : 3px;
  border-color : gray;
  border-radius : 20px;
  border-color : lightskyblue;
`;

const LabelView = styled.View`
  margin : 10px;
`;

const RegionPicker =({data=null,onChange=null,selectedValue=null})=> {
  return(
    <StyledView>
      <LabelView>
        <Label text="지역구를 선택하세요" color="gray" size="20"/>
      </LabelView>
      <Picker onValueChange={onChange} selectedValue={selectedValue}>
        {data.map((item,idx)=>{
          return <Picker.Item label={item} value={item} key={idx}/>
        })}
      </Picker>
    </StyledView>
  )
}

export default RegionPicker;