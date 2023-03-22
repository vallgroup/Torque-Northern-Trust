import { useState, useEffect } from 'react';

export const useSpectraAnalytics = () => {

  const [analytics, setAnalytics] = useState(
    (window.spectra
      && window.spectra.services
      && window.spectra.services.analytics
    ) || null
  )

  useEffect(() => {
    const _loadAnalytics = () => {
      window.spectra.services.analytics
        && setAnalytics(window.spectra.services.analytics)
    }

    if (null === analytics) {
      window.addEventListener('spectra_init', _loadAnalytics);
    }

    return () => {
      window.removeEventListener('spectra_init', _loadAnalytics);
    }
  }, [analytics])

  return analytics
}
