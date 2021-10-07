import React, {useState, useContext, useEffect} from 'react'
import Box from 'photon/src/components/Box';

export const closeSpectraModal = (opts = {}) => {
  dispatchModalEvent(false, opts)
}

export const openSpectraModal = (opts = {}) => {
  dispatchModalEvent(true, opts)
}

const dispatchModalEvent = (show, options) => {
  const _E = new CustomEvent('spectraModal', {
    detail: {
      openModal: !!show,
      ...options
    }
  })
  window && window.dispatchEvent(_E)
}

const SpectraModal = ({children}) => {

  const [show, setShow] = useState(false)

  const [params, setParams] = useState(null)

  useEffect(() => {
    const _show = (e) => {
      const {openModal, ...options} = e.detail
      setShow(openModal)
      setParams(options || null)
    }

    window && window.addEventListener('spectraModal', _show)

    return () => {
      window && window.removeEventListener('spectraModal', _show)
    }

  }, [])

  return (show && (
    <SpectraModalOverlay>
      SpectraModalOverlay
      <SpectraModalWindow>
        {(params && params.component)}
      </SpectraModalWindow>
    </SpectraModalOverlay>
  ))
};

export const SpectraModalOverlay = ({children}) => {
  return (<Box
    onClick={e => closeSpectraModal()}
    flex={true}
    flexBox={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    style={{
      position: 'fixed',
      top: '0px',
      left: '0px',
      zIndex: '99999', // 5
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0, 0.75)'
    }}>
    {children}
  </Box>)
}

export const SpectraModalWindow = ({children}) => {
  return (
    <Box
      onClick={e => e.stopPropagation()}
      flex={true}
      flexBox={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      style={{
        maxHeight: '70vh',
        overflowY: 'auto',
        padding: '5vw',
        background: 'lightgray'
      }}
      widths={['90vw', '60vw']}
    >
      {children}
    </Box>
  )
}

export default SpectraModal
