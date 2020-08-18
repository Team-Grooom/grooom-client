import React from 'react'
import Button from 'src/component/atom/button';

const SignUpSubmitButton =({onPress})=> {
  return(
    <Button title="회원가입 하기" type="outline" onPress={onPress}/>
  )
}

export default SignUpSubmitButton;