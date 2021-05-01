import firebase from"firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD2c-x98KdJ1DZLGXzDb0TaRgRLML7UejA",
    authDomain: "eclone-2468f.firebaseapp.com",
    projectId: "eclone-2468f",
    storageBucket: "eclone-2468f.appspot.com",
    messagingSenderId: "385041249769",
    appId: "1:385041249769:web:d272f3388ead83c3350778"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

