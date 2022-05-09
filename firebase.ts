// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjhnNQKwSb-ovhvN3G4rHphXbkAhCOgl0",
  authDomain: "next-firebase-strip.firebaseapp.com",
  projectId: "next-firebase-strip",
  storageBucket: "next-firebase-strip.appspot.com",
  messagingSenderId: "947434261669",
  appId: "1:947434261669:web:35871269ee399a82b6d14c",
  measurementId: "G-9EYJJ3T5ZH"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
