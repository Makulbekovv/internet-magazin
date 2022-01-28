// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOAefcHgQQZK05T5EMZZ2_Tp5CgT0O02M",
  authDomain: "genatolii-stor.firebaseapp.com",
  projectId: "genatolii-stor",
  storageBucket: "genatolii-stor.appspot.com",
  messagingSenderId: "389607683547",
  appId: "1:389607683547:web:453dd7ced950cc9cc4a3fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
