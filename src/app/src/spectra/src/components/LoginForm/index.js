import React, {useState, useEffect} from 'react'
import Button from 'photon/src/components/Button';
import Input from 'photon/src/components/Input';
import Box from 'photon/src/components/Box';
import Heading from 'photon/src/components/Heading';
import Text from 'photon/src/components/Text';

import EmailPassword from '../RegisterForm/EmailPassword'
import Google from '../RegisterForm/Google'

const LoginForm = () => {
  const [method, setMethod] = useState('Google')

  return (
    <div style={{padding: '5vw'}}>
      <Heading>{'Login'}</Heading>

      {('Google' === method) &&
        <Google login={true} />
      }

      {('EmailPassword' === method) &&
        <EmailPassword login={true} />
      }

      <br />
      <br />

      <hr />

      <br />
      <br />

      Or, <a
        href={'#'}
        style={{color: 'slategray'}}
        onClick={e => setMethod(
          ('Google' === method) ? 'EmailPassword' : 'Google'
        )}
      >
        {('Google' === method) ?
          `Enter email & password manually` :
          `Use Google to create my account`
        }
      </a>
    </div>
  )
};

export default LoginForm
