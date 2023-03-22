import * as firebase from 'firebase/app';
import 'firebase/functions';

export const getFunction = (funcName) => (
  firebase.functions().httpsCallable(funcName)
);
