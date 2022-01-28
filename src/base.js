import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5psBbYh2PgQ-JzUnu-_RNy4USjuCG7YE",
  authDomain: "golden-time-748ab.firebaseapp.com",
  projectId: "golden-time-748ab",
  storageBucket: "golden-time-748ab.appspot.com",
  messagingSenderId: "266769118776",
  appId: "1:266769118776:web:a7cf6cdab0f6245d7418cd",
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
export const auth = getAuth(fire);
export default fire;
