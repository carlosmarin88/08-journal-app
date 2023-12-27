// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMC_A19jpFuqZS8aMaPCK5Sz1fx1uqCho",
  authDomain: "react-cursos-fa14c.firebaseapp.com",
  projectId: "react-cursos-fa14c",
  storageBucket: "react-cursos-fa14c.appspot.com",
  messagingSenderId: "1084853504802",
  appId: "1:1084853504802:web:e15baae832dc8e27adf37b",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)