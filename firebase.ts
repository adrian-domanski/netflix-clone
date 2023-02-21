// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAu6KyOolr8jYmmMBcErX6ieclO8fOr7LQ',
  authDomain: 'netflix-clon-my.firebaseapp.com',
  projectId: 'netflix-clon-my',
  storageBucket: 'netflix-clon-my.appspot.com',
  messagingSenderId: '64171332731',
  appId: '1:64171332731:web:ebe9273f90f8106f81fede',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
