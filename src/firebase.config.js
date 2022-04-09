// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBqpcnH7tFamxH3FV_B3ArKaA_I3O5mceQ',
  authDomain: 'house-marketplace-app-bc90f.firebaseapp.com',
  projectId: 'house-marketplace-app-bc90f',
  storageBucket: 'house-marketplace-app-bc90f.appspot.com',
  messagingSenderId: '735451350252',
  appId: '1:735451350252:web:25b7b86cb6a1ceeb34d1c9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
