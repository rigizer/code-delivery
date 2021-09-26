// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9EJBzZ6mFzY4G-AlB5kyq8CGTNfLQPoQ",
  authDomain: "c-delivery-develop.firebaseapp.com",
  databaseURL: "https://c-delivery-develop-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "c-delivery-develop",
  storageBucket: "c-delivery-develop.appspot.com",
  messagingSenderId: "123558779580",
  appId: "1:123558779580:web:d537b06212ce6d3d2c8eb9",
  measurementId: "G-WTB46KSCG1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
