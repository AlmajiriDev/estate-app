// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-366a1.firebaseapp.com",
  projectId: "mern-estate-366a1",
  storageBucket: "mern-estate-366a1.appspot.com",
  messagingSenderId: "39216107717",
  appId: "1:39216107717:web:e342b40755871cb99a60ac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
