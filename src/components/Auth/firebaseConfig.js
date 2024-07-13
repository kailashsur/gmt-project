// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: String(import.meta.env.VITE_API_KEY),
    authDomain: String(import.meta.env.VITE_AUTH_DOMAIN),
    projectId: String(import.meta.env.VITE_PROJECT_ID),
    storageBucket: String(import.meta.env.VITE_STORAGE_BUCKET),
    messagingSenderId: String(import.meta.env.VITE_MESSAGING_SENDER_ID),
    appId: String(import.meta.env.VITE_APP_ID)
};
console.log("firebase config = ", firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
