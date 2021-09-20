import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqIKfUwiPx3EEsWf_LPw1zyDjeF56OrgM",
    authDomain: "snapchat-93a68.firebaseapp.com",
    projectId: "snapchat-93a68",
    storageBucket: "snapchat-93a68.appspot.com",
    messagingSenderId: "135958672674",
    appId: "1:135958672674:web:ac70c738af3f270a43a17b",
    measurementId: "G-3B1VV01Z5H"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storage, provider};