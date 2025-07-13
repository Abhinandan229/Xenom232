
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBX_Ce0XrifHJtPmGnQHnfhlHNxLeD3yhU",
  authDomain: "xenomnextt-187a0.firebaseapp.com",
  projectId: "xenomnextt-187a0",
  storageBucket: "xenomnextt-187a0.firebasestorage.app",
  messagingSenderId: "284109051715",
  appId: "1:284109051715:web:a42ff01803855667ce81f6",
  measurementId: "G-K7Q9STY9B1"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
