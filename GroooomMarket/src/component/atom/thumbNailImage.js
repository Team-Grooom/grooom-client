import React from 'react';
import {View} from 'react-native';
import {Image} from 'react-native-elements';
import styled from 'styled-components/native';

const ImageWrapper = styled.TouchableOpacity`
  border-width: 2px;
  border-color: skyblue;
  border-radius: 80px;
  overflow: hidden;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const ThumbnailImage = ({source, size, onPress}) => {
  return (
    <ImageWrapper size={size} onPress={onPress}>
      <Image
        source={{uri: source}}
        size={size}
        style={{width: size, height: size, resizeMode: 'contain'}}
      />
    </ImageWrapper>
  );
};

export default ThumbnailImage;
