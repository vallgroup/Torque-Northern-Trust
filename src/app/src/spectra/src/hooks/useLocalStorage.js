import { useState, useEffect } from 'react';

const useLocalStorage = (key, initVal = {}) => {

  const [storage, setStorage] = useState(initVal)

  useEffect(() => {
    window.localStorage && setStorage(
      (JSON.parse(window.localStorage.getItem(key)) || {})
    )
  }, [])

  useEffect(() => {
    window.localStorage && window.localStorage.setItem(key, JSON.stringify(storage))
  }, [storage])

  return [storage, setStorage]
}

export default useLocalStorage
