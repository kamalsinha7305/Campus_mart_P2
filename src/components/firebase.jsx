// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaDENhzQ4VaucmomWwb19sS7T2OGmWf40",
  authDomain: "campus-mart-60caf.firebaseapp.com",
  projectId: "campus-mart-60caf",
  storageBucket: "campus-mart-60caf.firebasestorage.app",
  messagingSenderId: "606543685631",
  appId: "1:606543685631:web:5902e6c75fb6566a08e9ca",
  measurementId: "G-4XL8R7NFNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;