import React, {useState, useEffect} from 'react'
import Button from 'photon/src/components/Button';
import Input from 'photon/src/components/Input';
import Box from 'photon/src/components/Box';
import Text from 'photon/src/components/Text';

import {
  registerWithEmailPassword,
  signInWithEmailPassword
} from '../../../firebase'

const EmailPassword = ({login}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <Text>
        {`${(!login && 'Create') || 'Login to'} your account manually.`}
      </Text>
      <Text>
        {`Enter your email and ${(!login && 'a new') || ''} password below.`}
      </Text>
      <Input
        value={email}
        inputType={'email'}
        placeholder={'Enter Email'}
        onChange={value => setEmail(value)}
      />
      <Input
        value={password}
        inputType={'password'}
        placeholder={'Enter Password'}
        onChange={value => setPassword(value)}
      />
      <Button
        colors={'primary'}
        onClick={() => {
          if (!login){
            registerWithEmailPassword(email, password)
            return;
          }
          signInWithEmailPassword(email, password)
        }}
      >
      Register
      </Button>
    </div>
  )
};

export default EmailPassword
