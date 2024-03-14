// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAMC_A19jpFuqZS8aMaPCK5Sz1fx1uqCho",
//   authDomain: "react-cursos-fa14c.firebaseapp.com",
//   projectId: "react-cursos-fa14c",
//   storageBucket: "react-cursos-fa14c.appspot.com",
//   messagingSenderId: "1084853504802",
//   appId: "1:1084853504802:web:e15baae832dc8e27adf37b",
// };

// Testing
const firebaseConfig = {
  apiKey: "AIzaSyDLnd7Wa2OwY1DTejoY0Xv4CoWkq551KXI",
  authDomain: "base-test-45baf.firebaseapp.com",
  projectId: "base-test-45baf",
  storageBucket: "base-test-45baf.appspot.com",
  messagingSenderId: "520182608458",
  appId: "1:520182608458:web:b7bedb4371e5b58ba06cb3",
  measurementId: "G-K273PVWET5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)