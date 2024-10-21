// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "be-fit-app-8ff94.firebaseapp.com",
  projectId: "be-fit-app-8ff94",
  storageBucket: "be-fit-app-8ff94.appspot.com",
  messagingSenderId: "234089689139",
  appId: "1:234089689139:web:4afda1a8118831b464b346",
  measurementId: "G-77JSXNN9H7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
