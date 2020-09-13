import React from 'react';
import {Image,View} from 'react-native';
import styled from 'styled-components/native';

const ImageWrapper = styled.View`
  border-width : 2px;
  border-color : skyblue;
  border-radius : 50px;
  overflow : hidden;
`;

const ThumbnailImage =({source,size})=> {
  return(
    <ImageWrapper>
      <Image source={{uri:source}} size={size} style={{width:size, height:size, resizeMode:"contain"}}/>
    </ImageWrapper>
  )
}

export default ThumbnailImage;