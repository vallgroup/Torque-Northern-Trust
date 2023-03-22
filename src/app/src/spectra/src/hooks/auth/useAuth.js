import { useState, useEffect } from 'react';
import {useSpectra} from '../useSpectra';

export const useAuth = (callback) => {

  const spectra = useSpectra();

  const memCallback = useCallback(
    () => {
      callback();
    },
    [callback],
  );

  useEffect(() => {

    const getColl = async path => {
      const _fs = await window.firebase.firestore();
      setCollection( _fs.collection(path) );
    }

    if (spectra && window.firebase) {
      window.firebase.auth().onAuthStateChanged(memCallback);
    }
  }, [spectra])

  return collection
}
