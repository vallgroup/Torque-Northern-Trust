import * as firebase from "firebase/app";
import 'firebase/analytics'
import 'firebase/messaging'
import 'firebase/remote-config'
import 'firebase/firestore'
import 'firebase/auth'

let _remoteConfig = null;

export const logEvent = (evtName, params) => {
  const _analytics = (firebase && firebase.analytics()) || null;
  _analytics && _analytics.logEvent(evtName, params)
}

export const firebaseInit = config => {
  if (!firebase.apps.length) {
    firebase.initializeApp(config)
  }
}

export const getRemoteConfig = async () => {
  _remoteConfig = firebase.remoteConfig()
  // _remoteConfig.settings.minimumFetchIntervalMillis = 60000
  try {
    const _check = await _remoteConfig.fetchAndActivate()
    return _remoteConfig;
  } catch (err) {
    console.error(err);
  }
}

export const getRemoteConfigValue = async (key, asJSON = false) => {
  try {
    const _rc = await getRemoteConfig()
    const __config = _rc.getValue(key)
    const __value = __config && __config._value

    if (asJSON) {
      return JSON.parse(__config._value)
    }

    return __config._value
  } catch (err) {
    console.error(err);
  }
}

const handleNotifications = (payload) => {
  // notifcation {title, body, tag}
  // payload.notification
  console.log('onMessage: ', payload);
}

export const initMessaging = async (config) => {

  const {handleNotifications} = config

  const messaging = firebase.messaging()

  try {
    await messaging.requestPermission()
  } catch (err) {
    console.error(err);
  }

  try {
    const token = await messaging.getToken()
    if (token) {
      messaging.onMessage(handleNotifications)
      console.info('Listening to notifications.');
    }
  } catch (err) {
    console.error(err);
    console.warn('we cannot listen to notifications.');
  }
}

export const getFirestore = () => {
  const firestore = firebase.firestore()
  return firestore
}

export const getFirestoreCollection = (path) => {
  const _fs = getFirestore()
  return _fs.collection(path)
}

export const getGoogleSignInResults = async (callback) => {
  try {
    const result = await firebase.auth().getRedirectResult()
    return result;
  } catch (err) {
    return err
  }
}

export const onUserAuth = (callback) => {
  firebase.auth().onAuthStateChanged(callback);
}

export const signInWithGoogle = () => {
  // Start a sign in process for an unauthenticated user.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithRedirect(provider);
}

export const signOut = async () => {
  // Start a sign in process for an unauthenticated user.
  await firebase.auth().signOut()
}
