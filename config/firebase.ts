// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkITfpP7YOdM1it2jrzfpmu7Z2S71O5Gc",
  authDomain: "artwalk-95d9f.firebaseapp.com",
  projectId: "artwalk-95d9f",
  storageBucket: "artwalk-95d9f.appspot.com",
  messagingSenderId: "674053506526",
  appId: "1:674053506526:web:9b1f318237748de3ee894f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()