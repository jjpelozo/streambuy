import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK0u06fUG-8sCCH4cQmF2Z-xTl9GSFPYM",
  authDomain: "fb-crud-react-514b9.firebaseapp.com",
  projectId: "fb-crud-react-514b9",
  storageBucket: "fb-crud-react-514b9.appspot.com",
  messagingSenderId: "103731546641",
  appId: "1:103731546641:web:e47f6adb9696f5a6e0bfb0"
};
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);
 const auth = firebase.auth();
 export { auth };
 export const db = fb.firestore()