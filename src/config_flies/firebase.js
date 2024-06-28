import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR2Ditoh7wu5IzUMzztR8AKpmKzvhOcpE",
  authDomain: "react-blog-hks.firebaseapp.com",
  projectId: "react-blog-hks",
  storageBucket: "react-blog-hks.appspot.com",
  messagingSenderId: "909862053121",
  appId: "1:909862053121:web:5c09d2f80f707dda41e700",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
