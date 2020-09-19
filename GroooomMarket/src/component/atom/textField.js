import React from 'react';
import styled from 'styled-components/native';

const TextField = ({placeholder, onTextChange, text}) => {
  return (
    <TextWrapper>
      <CustomTextInput
        placeholder={placeholder}
        onChangeText={onTextChange}
        value={text}
      />
    </TextWrapper>
  );
};

const TextWrapper = styled.View`
  width: 100%;
  border-width: 1px;
  border-color: skyblue;
  padding-left: 10px;
  padding-right: 10px;
`;

const CustomTextInput = styled.TextInput`
  flex: 1;
`;

export default TextField;
