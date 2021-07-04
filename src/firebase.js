import firebase from 'firebase/app'
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3ItG3tjUSpIm-MkNCmdbRtegkzVTf2K4",
  authDomain: "webapp1-24a88.firebaseapp.com",
  projectId: "webapp1-24a88",
  storageBucket: "webapp1-24a88.appspot.com",
  messagingSenderId: "6576205577",
  appId: "1:6576205577:web:411f6814eaf1798f8f6dd8",
  measurementId: "G-D2KW1F86L3"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
