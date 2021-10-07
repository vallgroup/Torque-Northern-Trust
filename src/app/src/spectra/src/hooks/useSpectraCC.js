import { useState, useEffect } from 'react';
import {useSpectra} from './useSpectra'

// const _allowedTypes = [
//   'string',
//   'bool',
//   'number',
//   'json',
// ];

export const useSpectraCC = (key, type, dflt) => {
  dflt = dflt || false

  const spectra = useSpectra();
  const [content, setContent] = useState(dflt);
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const getContent = () => {
      const __cnt = spectra.getCC(key, type)
      __cnt && setContent(__cnt)
    }
    spectra && ready && getContent()
    return () => setReady(false)
  }, [ready, key, spectra, type])

  useEffect(() => {
    const _loadCC = () => setReady(true)
    window.addEventListener('spectra_cc_ready', _loadCC);

    return () => {
      window.removeEventListener('spectra_cc_ready', _loadCC);
    }
  }, [])

  return content
}
