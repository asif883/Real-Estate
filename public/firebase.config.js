// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOQSWdDObgqTvENzFu2c2QbFP9QGNHW-g",
  authDomain: "urban-paradise.firebaseapp.com",
  projectId: "urban-paradise",
  storageBucket: "urban-paradise.appspot.com",
  messagingSenderId: "134837840677",
  appId: "1:134837840677:web:81ab8d306e92719c8b08cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;