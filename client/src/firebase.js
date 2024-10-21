// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCovZDH9v54kDEJGy_23gI6k6RWRCe13wM",
  authDomain: "real-estate-34059.firebaseapp.com",
  projectId: "real-estate-34059",
  storageBucket: "real-estate-34059.appspot.com",
  messagingSenderId: "518355825751",
  appId: "1:518355825751:web:5ce2cebd152e2c593f9f12",
  measurementId: "G-ZQ5R87DCR4"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);