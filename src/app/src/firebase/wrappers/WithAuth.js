
/**
 * Homepage template
 *
 * @package photon
 */
import React, {useState} from 'react';
import Loader from 'photon/src/components/Loader'
import FullScreen from 'photon/src/components/FullScreen'
import {onUserAuth} from 'fb/auth'

export default ({children}) => {

  const [user, setUser] = useState()

  onUserAuth((usr) => setUser(usr))

  return (undefined === user ?
    <FullScreen flexBox={{
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Loader />
    </FullScreen>:
    <>
    {children}
    </>
  );
}
