// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYM7oUQiqS5B0usrFsyAGShsybOYI2_yo",
  authDomain: "email-password-cb912.firebaseapp.com",
  projectId: "email-password-cb912",
  storageBucket: "email-password-cb912.firebasestorage.app",
  messagingSenderId: "428397096245",
  appId: "1:428397096245:web:e186a8fdaddc3379c1f07c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
