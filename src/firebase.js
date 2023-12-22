// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import firebase from "firebase/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBj438M9QNnR6hAeSKpaim9JVrflE2Iavw",
  authDomain: "codejob7-be213.firebaseapp.com",
  projectId: "codejob7-be213",
  storageBucket: "codejob7-be213.appspot.com",
  messagingSenderId: "305103073427",
  appId: "1:305103073427:web:509dc5449133f6d7881d66",
  measurementId: "G-DD31K2ZMHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const db=getFirestore(app);
export {app,auth};
export{db};