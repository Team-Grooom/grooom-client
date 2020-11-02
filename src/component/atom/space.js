import React from 'react';
import styled from 'styled-components/native';

const Space = ({size}) => {
  return <SpaceContainer size={size} />;
};

const SpaceContainer = styled.View`
  width: 100%;
  height: ${props => props.size}px;
`;

export default Space;
