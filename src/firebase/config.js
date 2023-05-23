// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyCa_CpH-IuRu14Ix6BXOpbTA1L0OowPTnM",

    authDomain: "quaver-react.firebaseapp.com",

    projectId: "quaver-react",

    storageBucket: "quaver-react.appspot.com",

    messagingSenderId: "397987707923",

    appId: "1:397987707923:web:e5c5c0754269aae5a2d3e6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig); // Referencia la proyecto de Firebase
export const db = getFirestore(app) // Referencia  la base de datos de Firestore
