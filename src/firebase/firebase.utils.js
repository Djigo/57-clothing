import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCubAtU76Hy81mlOhC-T-T5x8KKv_N7o14",
    authDomain: "clothing-db-9c696.firebaseapp.com",
    databaseURL: "https://clothing-db-9c696.firebaseio.com",
    projectId: "clothing-db-9c696",
    storageBucket: "clothing-db-9c696.appspot.com",
    messagingSenderId: "476210697022",
    appId: "1:476210697022:web:33d10e19707ba01cf2526f",
    measurementId: "G-JMY8D76P1D"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;