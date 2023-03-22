import React, {useState, useContext, useEffect} from 'react'

import Button from 'photon/src/components/Button';
import Box from 'photon/src/components/Box';

import Overlay from '../components/Overlay'
import SpectraModal from '../components/SpectraModal'
import SpectraControls from '../components/SpectraControls'

import useDesignMode from '../hooks/useDesignMode';
// import useLocalStorage from '../hooks/useLocalStorage';

import {
  onUserAuth,
  signOut,
  signInAnonymously,
  getFirestoreDoc,
} from '../../firebase'

import {
  getProject,
  updateProjectTemplate,
  buildProjectFromTemplate,
  newProject
} from '../helpers/projectsDB'

export const SpectraStorageContext = React.createContext({});

const SpectraStorage = ({
  children,
  currentProjectId,
  // hooks
  onActiveProject
}) => {

  const [dm, setDm] = useDesignMode('off')
  const [storage, setStorage] = useState({})
  //use this storage for offline -- useLocalStorage('__spectraLS')
  const [projectId, setProjectId] = useState('')
  const [activeProject, setActiveProject] = useState(null)

  const [user, setUser] = useState()

  const containerRef = React.createRef()

  const [processing, setProcessing] = useState(true)

  const [okToSubmit, setOkToSubmit] = useState(false)

  useEffect(() => {
    const __checkUserLoggedIn = () => {
      onUserAuth((loggedInUser) => {setUser(loggedInUser)})
    }

    const _bind = () => {
      __checkUserLoggedIn()
      containerRef.current.addEventListener('mouseenter', __bindHoverIn)
      containerRef.current.addEventListener('mouseleave', __bindHoverOut)
    }

    const _unBind = () => {
      containerRef.current.removeEventListener('mouseenter', __bindHoverIn)
      containerRef.current.removeEventListener('mouseleave', __bindHoverOut)
    }

    containerRef.current && _bind()

    return () => _unBind()
  }, [])

  useEffect(() => setProcessing(false), [user])

  useEffect(() => {
    const _loadPrj = async _id => {
      try {
        const _p = await getProject(_id)
        if (!_p) {
          setProcessing(false)
          return;
        }
        setStorage((_p.template || {}))
        setActiveProject(_p)
        setProcessing(false)
      } catch(err) {
        throw new Error(err.message)
      }
    }
    if (user && currentProjectId) {
      setProcessing(true)
      setProjectId(currentProjectId)
      _loadPrj(currentProjectId)
    }
  }, [user, currentProjectId])

  useEffect(() => {
    const __savePrj = async () => {
      if (activeProject) {
        await updateProjectTemplate(activeProject.id, storage)
        setProcessing(false)
        return;
      }
      await __newProject()
      setProcessing(false)
    }

    (true === okToSubmit) && __savePrj()

    return () => setOkToSubmit(false)
  }, [storage])

  useEffect(() => {
    (activeProject &&
      projectId !== activeProject.id &&
      onActiveProject &&
      'function' === typeof onActiveProject &&
      onActiveProject(activeProject)
    )
  }, [activeProject])

  const saveChanges = async e => {
    setOkToSubmit(true)
    e.preventDefault();
    setProcessing(true)
    await _buildStorage()
  }

  const _buildStorage = async () => {
    const _obj = {...storage}
    const _allEditables = document.querySelectorAll('.spectra-element')

    for (var i = 0; i < _allEditables.length; i++) {
      ((el) => {
        if(!el) return;
        const _key = el.getAttribute('data-spectra-key')
        if (!_key) return;
        _obj[_key] = el.innerText
      })(_allEditables[i])
    }

    setStorage(_obj)
  }

  const __newProject = async () => {
    try {
      const __prjData = await buildProjectFromTemplate(storage)
      const _project = await newProject(__prjData)
      setActiveProject(_project)
    } catch(err) {
      console.error(err);
    }
  }

  const __bindHoverIn = () => setDm('on')

  const __bindHoverOut = () => setDm('off')

  const store = {
    storage,
    saveChanges,
    user,
    projectId,
    activeProject,
  }

  return (
    <SpectraStorageContext.Provider value={store}>
      <div ref={containerRef}>
        {children}
        {processing &&
          <Overlay />
        }
      </div>
      <SpectraControls />
      <SpectraModal />
    </SpectraStorageContext.Provider>
  );
};

export default SpectraStorage
