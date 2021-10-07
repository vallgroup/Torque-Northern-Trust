import * as firebase from 'firebase/app';
import 'firebase/firestore';

let _firestore = null;

export const getFirestore = () => {
  _firestore = firebase.firestore();
  return _firestore;
};

export const getCollection = async path => {
  const _fs = await getFirestore();
  return _fs.collection(path);
};

export const getDocument = async path => {
  const _fs = await getFirestore();
  return _fs.doc(path);
};
