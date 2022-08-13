import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAUZvKsfPOQXWefNAReRVfHfO34EVIL1UQ",
  authDomain: "learning-firebase-3bdfe.firebaseapp.com",
  projectId: "learning-firebase-3bdfe",
  storageBucket: "learning-firebase-3bdfe.appspot.com",
  messagingSenderId: "1067689616356",
  appId: "1:1067689616356:web:93bd3964fa285d3e845df1"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}