import React, {useState, useEffect} from 'react'
import Button from 'photon/src/components/Button';
import Input from 'photon/src/components/Input';
import Box from 'photon/src/components/Box';
import Text from 'photon/src/components/Text';
// import GoogleLogo from 'photon/src/assets/image/google.png';

import {signInWithGoogle} from '../../../firebase'

const Google = ({login}) => {

  // useEffect(() => {}, [])

  return (
    <Box>
      <Text>
        Fast & secure ${login || 'registration'} with Google.
      </Text>
      <Button
        onClick={signInWithGoogle}
        style={{
          backgroundColor: 'tomato',
        }}
      >
        {`${(!login && 'Register') || 'Login'} with Google`}
      </Button>
    </Box>
  )
};

export default Google
