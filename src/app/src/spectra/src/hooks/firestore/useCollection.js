import { useState, useEffect } from 'react';
import {useSpectra} from '../useSpectra';

export const useCollection = (collName) => {
  const spectra = useSpectra();
  const [collection, setCollection] = useState(null)

  useEffect(() => {

    const getColl = async path => {
      const _fs = await window.firebase.firestore();
      setCollection( _fs.collection(path) );
    }

    if (spectra && null === collection) {
      window.firebase &&
      (0 < window.firebase.apps.length) &&
      getColl(collName);
    }

  }, [spectra, collName, collection])

  return collection
}
