import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDWcS76EnBjjpLgS_lx1t7VXHLrsmnQWSc',
  authDomain: 'crown-db-c8dcf.firebaseapp.com',
  projectId: 'crown-db-c8dcf',
  storageBucket: 'crown-db-c8dcf.appspot.com',
  messagingSenderId: '1053821340478',
  appId: '1:1053821340478:web:6003cef60e9c8078b67a6f',
  measurementId: 'G-ZEW8E476M6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
