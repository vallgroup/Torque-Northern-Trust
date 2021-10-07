import { useState, useEffect } from 'react';
import {getRemoteConfigValue} from 'fb'

// const _allowedTypes = [
//   'string',
//   'bool',
//   'number',
//   'json',
// ];

export const useRemoteConfig = (key, asJSON, dflt) => {
  const [content, setContent] = useState(dflt);
  const [ready, setReady] = useState(true)

  useEffect(() => {
    const getContent = async () => {
      const __cnt = await getRemoteConfigValue(key, asJSON)
      // console.count('useRemoteConfig:getContent');
      __cnt && setContent(__cnt)
    }
    (ready && content === dflt) && getContent()
    return () => setReady(false)
  }, [key, asJSON, ready, content, dflt])

  return content
}
