// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqVaxsbXPZMR6906DF36W-Wg16xwrxqGw",
  authDomain: "email-pass-auth-a859c.firebaseapp.com",
  projectId: "email-pass-auth-a859c",
  storageBucket: "email-pass-auth-a859c.firebasestorage.app",
  messagingSenderId: "286200362385",
  appId: "1:286200362385:web:d42384b45e104d7ff4d630",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
