// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYQ9IonqLyWVAxD6jBJ4xGWIU71ezeMEc",
  authDomain: "project-management-9bab2.firebaseapp.com",
  projectId: "project-management-9bab2",
  storageBucket: "project-management-9bab2.appspot.com",
  messagingSenderId: "110192854616",
  appId: "1:110192854616:web:9e4308f71e626db90fec2d",
  measurementId: "G-605YXQR7EJ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;