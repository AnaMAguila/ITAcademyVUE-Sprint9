import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCggMGYlZkHL0KKNpIOoAc_cZrzYJfRgNM",
  authDomain: "mealvelous.firebaseapp.com",
  projectId: "mealvelous",
  storageBucket: "mealvelous.appspot.com",
  messagingSenderId: "1088278681519",
  appId: "1:1088278681519:web:81b33bcfdb4cbf10c3415a",
  measurementId: "G-DRQWPNQZY7",
};

// init firebase
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }