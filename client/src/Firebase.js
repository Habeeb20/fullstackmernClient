// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernauth-e642e.firebaseapp.com",
  projectId: "mernauth-e642e",
  storageBucket: "mernauth-e642e.appspot.com",
  messagingSenderId: "330161099346",
  appId: "1:330161099346:web:8fabd76e325b0eb434458b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);