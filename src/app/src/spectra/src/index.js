/**
 * Spectra
 */
import React, {useEffect} from 'react';
import {firebaseInit} from 'fb'

export default ({config, children}) => {
  useEffect(() => {
    firebaseInit(config, 'spectra')
  }, [config])

  return (<>
    {children}
  </>)
}
