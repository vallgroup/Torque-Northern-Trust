import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/messaging';
import 'firebase/remote-config';
import 'firebase/firestore';
import 'firebase/auth';

const vapidKey = ''//'BLk1ZlSKGoHfbAizu5lJVpwZ19z6bTZTLdCktmPobsG--DIMUetc2QwT5k_E0-K3JQzxegzPrYkctPAxXQ0eDq8'

let _remoteConfig = null;
let _analytics = null;

export const loadAnalytics = () => {
  if (null == _analytics) {
    _analytics = firebase && firebase.analytics();
  }
};

export const logEvent = (evtName, params) => {
  _analytics && _analytics.logEvent(evtName, params);
};

export const firebaseInit = async (config, appName) => {
  if (appName && '' !== appName) {
    await firebase.initializeApp(config, (appName || ''));
  } else {
    await firebase.initializeApp(config);
  }

  loadAnalytics();
};
// This function initiates the remote config object
// use getRemoteConfigValue to retrieve values from RC
export const getRemoteConfig = async () => {
  _remoteConfig = firebase.remoteConfig();
  _remoteConfig.settings.minimumFetchIntervalMillis = 1000 * 60// * 60
  try {
    await _remoteConfig.fetchAndActivate();
    return _remoteConfig;
  } catch (err) {
    console.error(err);
  }
};
// Use this function to retrieve a RC value using its key
export const getRemoteConfigValue = async (key, asJSON = false) => {
  let val = asJSON ? {} : '';
  try {
    const _rc = await getRemoteConfig();
    const __config = await _rc.getValue(key);
    // TODO: use RC native methods to retrieve data
    const __value = __config && __config._value;
    if (asJSON) {
      return JSON.parse(__value);
    }
    val = __value;
  } catch (err) {
    console.log(`Could not retreieve RC with key: ${key}`)
    // console.error(err);
  }
  return val
};

// const handleNotifications = (payload) => {
//   // notifcation {title, body, tag}
//   // payload.notification
//   console.log('onMessage: ', payload);
// }

export const initMessaging = async config => {
  const { handleNotifications } = config;

  const messaging = firebase.messaging();

  try {
    const token = await messaging.getToken({vapidKey});
    console.log(token);
    if (token) {
      messaging.onMessage(handleNotifications);
      console.info('Listening to notifications.');
    }
  } catch (err) {
    console.error(err);
    console.warn('we cannot listen to notifications.');
  }
};

let _firestore = null;
export const getFirestore = () => {
  _firestore = firebase.firestore();
  return _firestore;
};

export const getFirestoreCollection = async path => {
  const _fs = await getFirestore();
  return _fs.collection(path);
};

export const getFirestoreDoc = async path => {
  const _fs = await getFirestore();
  return _fs.doc(path);
};

export const getGoogleSignInResults = async callback => {
  try {
    const result = await firebase.auth().getRedirectResult();
    return result;
  } catch (err) {
    return err;
  }
};

export const currentUser = () => (firebase.auth().currentUser)

export const onUserAuth = callback => {
  firebase.auth().onAuthStateChanged(callback);
};

export const signInWithGoogle = () => {
  // Start a sign in process for an unauthenticated user.
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  firebase.auth().signInWithRedirect(provider);
};

export const registerWithEmailPassword = async (email, password) => {
  try {
    await firebase.auth()
    .createUserWithEmailAndPassword(email, password)
  } catch(err) {
    throw new Error(err.message)
  }
};

export const signInWithEmailPassword = async (email, password) => {
  try {
    await firebase.auth()
    .signInWithEmailAndPassword(email, password)
  } catch(err) {
    throw new Error(err.message)
  }
};

export const signInAnonymously = async () => {
  try {
    const user = await firebase.auth().signInAnonymously()
    return user
  } catch(err) {
    console.error(err)
  }
  // .catch(function(error) {
  // // Handle Errors here.
  // var errorCode = error.code;
  // var errorMessage = error.message;
  //
  // if (errorCode === 'auth/operation-not-allowed') {
  //   alert('You must enable Anonymous auth in the Firebase Console.');
  // } else {
  //   console.error(error);
  // }
// });
//   // Start a sign in process for an unauthenticated user.
//   var provider = new firebase.auth.GoogleAuthProvider();
//   provider.addScope('profile');
//   provider.addScope('email');
//   firebase.auth().signInWithRedirect(provider);
};

export const signOut = async () => {
  // Start a sign in process for an unauthenticated user.
  await firebase.auth().signOut();
};
