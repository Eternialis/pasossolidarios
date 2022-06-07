import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const { REACT_APP_FIREBASE_API_KEY } = process.env

const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: "pasos-solidarios.firebaseapp.com",
    projectId: "pasos-solidarios",
    storageBucket: "pasos-solidarios.appspot.com",
    messagingSenderId: "579759416779",
    appId: "1:579759416779:web:21955e548c46f4f84e424e",
    measurementId: "G-4HG752HNQR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const noticiasCollection = collection(db, "noticias")