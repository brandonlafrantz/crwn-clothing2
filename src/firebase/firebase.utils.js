import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBo3dbBY22eJ5ITrB-K-J72OivUiHrn_Q4",
  authDomain: "crwn-db-eccd2.firebaseapp.com",
  projectId: "crwn-db-eccd2",
  storageBucket: "crwn-db-eccd2.appspot.com",
  messagingSenderId: "60172641515",
  appId: "1:60172641515:web:8ca63c51ee14185b890aae",
  measurementId: "G-8JJP0B7LSG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
