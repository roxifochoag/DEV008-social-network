// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// importamps desde fireestore ese codigo //++
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDzcfa3MBIp2IA3cuOBKZntaHv9-0BqeI8',
  authDomain: 'dev008-social-network.firebaseapp.com',
  projectId: 'dev008-social-network',
  storageBucket: 'dev008-social-network.appspot.com',
  messagingSenderId: '813514052859',
  appId: '1:813514052859:web:cf928bd795e4eb761d0c5e',
  measurementId: 'G-N70CK0BGX8',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// inicialize firestore
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
