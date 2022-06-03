// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBGErg_ecll3qvEkGlbRXTQyQ9oA3nMWo",
  authDomain: "redux-76f4d.firebaseapp.com",
  projectId: "redux-76f4d",
  storageBucket: "redux-76f4d.appspot.com",
  messagingSenderId: "896562590223",
  appId: "1:896562590223:web:11244d0abd2bf07b64297a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);