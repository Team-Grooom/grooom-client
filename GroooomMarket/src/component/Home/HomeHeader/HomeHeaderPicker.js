import React, {useState, useContext, useEffect} from 'react';
// 더이상 지원되지 않는 Picker임, select나 다른 대안을 찾을 것
import {Picker} from 'react-native';
import {UserState} from '../../../../store/store';

const initialState = [
  {
    myArea: '광진구',
  },
  {
    myArea: '종로구',
  },
];

const HomeHeaderPicker = () => {
  const [myArea, setMyPickerList] = useState(initialState[0]);
  const [userContext, setUserContext] = useContext(UserState);

  useEffect(() => {
    setUserContext({authFlag: true, myArea: myArea.myArea});
  }, []);

  return (
    <Picker
      selectedValue={myArea}
      style={{height: 50, width: 150}}
      onValueChange={(selectedArea, selectedAreaIndex) => {
        setMyPickerList(selectedArea);
        setUserContext({authFlag: true, myArea: selectedArea});
      }}>
      {initialState.map((myAreaList, i) => {
        return (
          <Picker.Item
            key={i}
            label={myAreaList.myArea}
            value={myAreaList.myArea}
          />
        );
      })}
    </Picker>
  );
};

export default HomeHeaderPicker;
