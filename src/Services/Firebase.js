import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCD9KP_P2dyZOQoWjnh0lsNzWng83ZvukI",
  authDomain: "ecommerce-7e825.firebaseapp.com",
  projectId: "ecommerce-7e825",
  storageBucket: "ecommerce-7e825.appspot.com",
  messagingSenderId: "351401419676",
  appId: "1:351401419676:web:e9fc3055728d7d3d29de59",
  measurementId: "G-M6NM97VMK5"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const fs = getFirestore(app);