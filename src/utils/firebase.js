// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_qaSSQ9Xm7CW9A2PoR-t3Y9tsB2p9euQ",
  authDomain: "netflixgpt-62423.firebaseapp.com",
  projectId: "netflixgpt-62423",
  storageBucket: "netflixgpt-62423.appspot.com",
  messagingSenderId: "657528738648",
  appId: "1:657528738648:web:890f11d0b13a6242d68b2d",
  measurementId: "G-EZW2749FVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
