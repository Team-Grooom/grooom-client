import React from 'react';
import styled from 'styled-components/native';
import {Animated} from 'react-native';
import {Slider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';

const AreaSlider = ({sliderValue, onSliderChange}) => {
  return (
    <SliderContainer>
      <Slider
        value={sliderValue}
        animateTransitions={true}
        onValueChange={value => onSliderChange(value)}
        trackStyle={{height: 10}}
        thumbStyle={{height: 30, width: 30, backgroundColor: 'transparent'}}
        maximumValue={4}
        step={1}
        thumbProps={{
          children: (
            <Icon
              name="cloud"
              size={30}
              containerStyle={{backgroundColor: 'transparent'}}
              color="azure"
            />
          ),
        }}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled.View`
  margin-top: 20px;
`;

export default AreaSlider;
