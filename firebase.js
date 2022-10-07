// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAompfIHpAhLcMbgLEwlWlx6MC7cY68c-4",
    authDomain: "rn-instagram-clone-86370.firebaseapp.com",
    projectId: "rn-instagram-clone-86370",
    storageBucket: "rn-instagram-clone-86370.appspot.com",
    messagingSenderId: "155121810137",
    appId: "1:155121810137:web:ac6853648cbaa91f3b5cc8"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
  }

export default firebase