import * as firebase from 'firebase/app';
import 'firebase/storage';

let _storage = null;

export const getStorage = () => {
  _storage = firebase.storage();
  return _storage;
};

export const getRef = async path => {
  const _fs = await getStorage();
  return _fs.ref(path);
};
