// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8X_T67TP4-RVo9q5PYyTrKVJ6Z3LrHVY",
  authDomain: "instter-3573a.firebaseapp.com",
  projectId: "instter-3573a",
  storageBucket: "instter-3573a.appspot.com",
  messagingSenderId: "349547533626",
  appId: "1:349547533626:web:171f8c40d18d040c8e6c03",
  measurementId: "G-58FLWHT7V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);