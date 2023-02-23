import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkVKOefdmpYgHBEiWJRAZVPLxn-RLhgms",
  authDomain: "chat-10d0c.firebaseapp.com",
  projectId: "chat-10d0c",
  storageBucket: "chat-10d0c.appspot.com",
  messagingSenderId: "425971112127",
  appId: "1:425971112127:web:2548576d4873c0f9ce4e0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
