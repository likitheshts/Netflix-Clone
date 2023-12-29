// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6BT5NyRB3DOIr-at0eAKlkCb8CAHjwHU",
  authDomain: "netflixgpt-bd780.firebaseapp.com",
  projectId: "netflixgpt-bd780",
  storageBucket: "netflixgpt-bd780.appspot.com",
  messagingSenderId: "125224856082",
  appId: "1:125224856082:web:792fe7903a9bfca91806cb",
  measurementId: "G-MCBQ130C23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
