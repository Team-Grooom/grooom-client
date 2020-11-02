import React from 'react';
import styled from 'styled-components/native';

import IconButton from 'src/component/atom/iconButton';

const SellLogButton = ({onPressSell, onPressBuy, onPressStar}) => {
  return (
    <ButtonContainer>
      <IconButton
        name="shoppingcart"
        size={24}
        text="구매목록"
        backgroundColor="#DEF5E4"
        color="teal"
        onPress={onPressBuy}
      />
      <IconButton
        name="shoppingcart"
        size={24}
        text="판매목록"
        backgroundColor="aliceblue"
        color="cornflowerblue"
        onPress={onPressSell}
      />
      <IconButton
        name="star"
        size={24}
        text="즐겨찾기"
        backgroundColor="lemonchiffon"
        color="coral"
        onPress={onPressStar}
      />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default SellLogButton;
