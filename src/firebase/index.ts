import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAQbRVky1tCDAOa1v6DB5nEsE1cmlH5oP8",
  authDomain: "dsnr-app.firebaseapp.com",
  projectId: "dsnr-app",
  storageBucket: "dsnr-app.appspot.com",
  messagingSenderId: "414774640373",
  appId: "1:414774640373:web:36f620f8017f4b4e9f4fbc",
  measurementId: "G-00HH77QRP7",
});

export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export const functions = getFunctions(firebaseApp);
