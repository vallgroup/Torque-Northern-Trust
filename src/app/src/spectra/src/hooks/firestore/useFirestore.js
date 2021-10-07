import { useState, useEffect } from 'react';

import {useSpectra} from '../useSpectra';

export const useFirestore = () => {
  const spectra = useSpectra();
  const [store, setStore] = useState()

  useEffect(() => {

    const getStore = async () => {
      const _fs = await window.firebase.firestore();
      setStore( _fs );
    }

    if (spectra && window.firebase) {
      (!store) && getStore();
    }
  }, [spectra])

  return store
}
