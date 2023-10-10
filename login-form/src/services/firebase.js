// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDyi1GbcH3t_jrVihIgDPln19x7t2i0jVE",
   authDomain: "login-firebase-63815.firebaseapp.com",
   projectId: "login-firebase-63815",
   storageBucket: "login-firebase-63815.appspot.com",
   messagingSenderId: "365860974307",
   appId: "1:365860974307:web:2e953e57118746b1ea1fd6",
   measurementId: "G-QMM155JC2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
