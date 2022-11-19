// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpA50T0uvhqB5K5jJ-6oEaC6HRu06yiOU",
  authDomain: "volunteer-platform-4ba1a.firebaseapp.com",
  projectId: "volunteer-platform-4ba1a",
  storageBucket: "volunteer-platform-4ba1a.appspot.com",
  messagingSenderId: "782157749420",
  appId: "1:782157749420:web:87cb414127011d5a7e9309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;