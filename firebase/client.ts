
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjltQn9-IFbybEXQUy70Cp-s0SMwmjhCU",
  authDomain: "goprep-bd427.firebaseapp.com",
  projectId: "goprep-bd427",
  storageBucket: "goprep-bd427.firebasestorage.app",
  messagingSenderId: "535062686473",
  appId: "1:535062686473:web:3429eed0e385f5796c41d8",
  measurementId: "G-8F687CEJFB"
};

const app = !getApps.length ?  initializeApp(firebaseConfig):getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);