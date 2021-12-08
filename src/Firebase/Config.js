// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestone } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdRuWv5NEULpG7YBtpBsqtOP2OMRDHxSs",
  authDomain: "reactcolque.firebaseapp.com",
  projectId: "reactcolque",
  storageBucket: "reactcolque.appspot.com",
  messagingSenderId: "5091417553",
  appId: "1:5091417553:web:496cabb56405cb053214f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestone(app)