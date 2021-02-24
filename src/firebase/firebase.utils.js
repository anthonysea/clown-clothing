import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAojZaAhjadqEn9j4K98e-bw1TZu5CY9MY",
    authDomain: "clwn-clothing-db-60aec.firebaseapp.com",
    projectId: "clwn-clothing-db-60aec",
    storageBucket: "clwn-clothing-db-60aec.appspot.com",
    messagingSenderId: "617707385867",
    appId: "1:617707385867:web:629333b6f4274ea13b830e",
    measurementId: "G-S9WHRQT40J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google auth utils
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); // trigger google account select popup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;