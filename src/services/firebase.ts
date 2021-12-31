import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAEEa2z-m3XadqGSJMA_zP10lDQ3Q5OcPE',
  authDomain: 'faire-9b2c8.firebaseapp.com',
  projectId: 'faire-9b2c8',
  storageBucket: 'faire-9b2c8.appspot.com',
  messagingSenderId: '466301948814',
  appId: '1:466301948814:web:3d6632c90f43ed8f800adf',
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
