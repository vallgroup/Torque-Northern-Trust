import { useState, useEffect } from 'react';

export const useSpectra = () => {

  const [client, setClient] = useState(null)

  useEffect(() => {
    const _loadClient = () => setClient(window.spectra)

    // if (null === client) {
      window.addEventListener('spectra_init', _loadClient);
    // }

    return () => {
      window.removeEventListener('spectra_init', _loadClient);
    }
  }, [client])

  return client
}
