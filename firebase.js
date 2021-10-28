import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3V4WbJ5CM3Dqt2usvajLgw5YjS34UHcI",
  authDomain: "whatsapp-1f4fc.firebaseapp.com",
  projectId: "whatsapp-1f4fc",
  storageBucket: "whatsapp-1f4fc.appspot.com",
  messagingSenderId: "657736170403",
  appId: "1:657736170403:web:e7cd93433f41259366b816"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
