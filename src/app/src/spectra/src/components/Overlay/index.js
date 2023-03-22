import React from 'react'

import Box from 'photon/src/components/Box';
import Loader from 'photon/src/components/Loader';

export default function Overlay() {

  const _overlay = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    position: 'fixed',
    top: '0px',
    left: '0px',
    zIndex: '99999999',
    width: '100vw',
    height: '100vh',
  }

  return (
    <Box
      flexBox={true}
      alignItems={'center'}
      justifyContent={'center'}
      style={_overlay}
    >
      <Loader
        width={'5em'}
        height={'5em'}
      />
    </Box>
  )
}
