import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

// Your web app's Firebase configuration
const CONFIG = {
  apiKey: "AIzaSyAn1795WKxV1B8uXyLWQw8UMk50WG4Nbgo",
  authDomain: "epam-coworking.firebaseapp.com",
  projectId: "epam-coworking",
  storageBucket: "epam-coworking.appspot.com",
  messagingSenderId: "844668389862",
  appId: "1:844668389862:web:eb2523dadd6a35ee4dae27",
};

// Initialize Firebase
const APP = initializeApp(CONFIG);
// Reference to Firebase authentication service
const AUTH = getAuth(APP);

export default AUTH;
