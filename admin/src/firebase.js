// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE_tyz4TnFH65ln5rnOs5BBxbfQe7l6vk",
  authDomain: "store-8820a.firebaseapp.com",
  projectId: "store-8820a",
  storageBucket: "store-8820a.appspot.com",
  messagingSenderId: "324394434915",
  appId: "1:324394434915:web:46ff5d31a6bab13613d356",
  measurementId: "G-02B2KLFEJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;