// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxnRYlSPsjmQBYBE4NSzbuLaX5JRGfEZ0",
  authDomain: "netflixgpt-ab831.firebaseapp.com",
  projectId: "netflixgpt-ab831",
  storageBucket: "netflixgpt-ab831.appspot.com",
  messagingSenderId: "231735725762",
  appId: "1:231735725762:web:23e0466940feb3bc2cf55b",
  measurementId: "G-0FYWL0WLKP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

export const auth = getAuth();
