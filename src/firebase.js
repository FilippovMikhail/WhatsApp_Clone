import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Способы подключения к базе
const firebaseConfig = {
    apiKey: "AIzaSyBNXYeLLnw6xFKYF6lftluZ9WnqpTbzgrY",
    authDomain: "whats-app-clone-f28ab.firebaseapp.com",
    databaseURL: "https://whats-app-clone-f28ab.firebaseio.com",
    projectId: "whats-app-clone-f28ab",
    storageBucket: "whats-app-clone-f28ab.appspot.com",
    messagingSenderId: "845889190587",
    appId: "1:845889190587:web:b5cb6a7401cd03b81f079e",
    measurementId: "G-42BWG3VMQ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
