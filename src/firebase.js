import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCaGnK0nnZLFxOhjc50RBs0i0IZaV8gfs8",
    authDomain: "slack-clone-52f92.firebaseapp.com",
    projectId: "slack-clone-52f92",
    storageBucket: "slack-clone-52f92.appspot.com",
    messagingSenderId: "696694083467",
    appId: "1:696694083467:web:5e8a660f591e437d38a98e",
    measurementId: "G-PG0D3WPV7G",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;