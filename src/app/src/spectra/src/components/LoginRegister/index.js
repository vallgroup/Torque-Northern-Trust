import React, {useState, useEffect} from 'react'
import Button from 'photon/src/components/Button';
import Input from 'photon/src/components/Input';
import Box from 'photon/src/components/Box';
import Heading from 'photon/src/components/Heading';
import Text from 'photon/src/components/Text';

import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'

const LoginRegister = () => {

  const [which, setWhich] = useState('Register')

  return (
    <Box>

      <Box>
        <a
          href={'#'}
          onClick={() => setWhich('Register')}
          style={{textDecoration: (
            'Register' === which ? 'underline' : 'none'
          )}}
        >
          Register
        </a>
        &nbsp;&nbsp;&nbsp;
        <a
          href={'#'}
          onClick={() => setWhich('Login')}
          style={{textDecoration: (
            'Login' === which ? 'underline' : 'none'
          )}}
        >
          Login
        </a>
      </Box>

      {'Register' === which && <RegisterForm />}

      {'Login' === which && <LoginForm />}

    </Box>
  )
};

export default LoginRegister
