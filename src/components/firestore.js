import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);