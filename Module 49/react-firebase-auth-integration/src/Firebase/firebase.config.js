// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVWYSJb7jJ30SobXxa-LWSUYzeGSxgHDI",
  authDomain: "react-firebase-auth-inte-27dd5.firebaseapp.com",
  projectId: "react-firebase-auth-inte-27dd5",
  storageBucket: "react-firebase-auth-inte-27dd5.firebasestorage.app",
  messagingSenderId: "289505985317",
  appId: "1:289505985317:web:14ca324b3e6f10b91310cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
