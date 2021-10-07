import { useState, useEffect } from 'react';
import {useSpectra} from '../useSpectra';

export const useDocument = (docPath) => {
  let store = null;
  const spectra = useSpectra();
  const [documnt, setDocument] = useState()

  useEffect(() => {

    const getDoc = async path => {
      const _fs = await window.firebase.firestore();
      setDocument( _fs.doc(path) );
    }

    if (spectra && window.firebase) {
      (null === store) && getDoc(docPath);
    }

    return () => store = null;
  }, [spectra])

  return documnt
}
