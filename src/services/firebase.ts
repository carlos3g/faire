/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';

const firebaseConfig: FirebaseOptions = {
  apiKey: Constants.manifest?.extra?.apiKey,
  authDomain: Constants.manifest?.extra?.authDomain,
  projectId: Constants.manifest?.extra?.projectId,
  storageBucket: Constants.manifest?.extra?.storageBucket,
  messagingSenderId: Constants.manifest?.extra?.messagingSenderId,
  appId: Constants.manifest?.extra?.appId,
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
