import * as firebase from 'firebase/app'
import 'firebase/auth';

export const currentUser = () => (firebase && firebase.auth().currentUser)

export const onUserAuth = callback => {
  firebase && firebase.auth().onAuthStateChanged(callback);
};

export const signInWithGoogle = () => {
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
};

export const signOut = async () => {
  await firebase.auth().signOut();
};

// export const getCredentials = () => {
//   return firebase.auth.AuthCredentials
// }

export const updatePassword = (newpass) => {
  return currentUser.updatePassword(newpass);
}

export const resetPWEmail = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
  } catch(err) {
    console.error(err);
    return false
  }
  return true
}

export const getUserByEmail = async (email) => {
  try {
    const user = await firebase.auth().getUserByEmail(email)
    return user
  } catch(err) {
    console.error(err);
    return false
  }
}
