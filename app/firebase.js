// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARUux1dr7nRLlNDG6OhApnos18UQ0kFcQ",
  authDomain: "expense-tracker-8c53d.firebaseapp.com",
  projectId: "expense-tracker-8c53d",
  storageBucket: "expense-tracker-8c53d.appspot.com",
  messagingSenderId: "262677726497",
  appId: "1:262677726497:web:e7ff3f697d160114486a60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
