import { initializeApp } from "firebase/app";

class FirebaseConnection {
	initialize() {
        console.log('INICIANDO FIREBASE');
        initializeApp({
           apiKey: "AIzaSyDqdyl8By8Sc19Y1lOqRak1BoMGiwEr54c",
  authDomain: "no-queue-6baa2.firebaseapp.com",
  projectId: "no-queue-6baa2",
  storageBucket: "no-queue-6baa2.appspot.com",
  messagingSenderId: "7845772715",
  appId: "1:7845772715:web:530d752e1c6d40a078a6ee",
  measurementId: "G-CVM6SY0SS8"
        });
	}
}

// Registro dos services
export default ({ }, inject) => {
    let firebaseConnection = new FirebaseConnection();
    firebaseConnection.initialize();
	inject('firebaseConnetion', firebaseConnection);
}