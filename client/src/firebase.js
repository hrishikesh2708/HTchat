import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6ognz4ZrukOv0fpt7nsIhhe8Wse8AYzs",
  authDomain: "htchat-695ae.firebaseapp.com",
  projectId: "htchat-695ae",
  storageBucket: "htchat-695ae.appspot.com",
  messagingSenderId: "252696982207",
  appId: "1:252696982207:web:ea5d19fc8db816f7ce8c0a",
  measurementId: "G-QJLY55X0X4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;