import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyCev-C6AKuyxD8oXcGwuAyyGmWpo7INl3U",
    authDomain: "netflix-test01.firebaseapp.com",
    databaseURL: "api_key=979ae28ba96d05f250c528e4fd16f273",
    projectId: "netflix-test01",
    storageBucket: "netflix-test01.appspot.com",
    messagingSenderId: "541152959854",
    appId: "1:541152959854:web:38145f65984eef0cd3757f",
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error raised", err.stack);
  }
}

export default firebase;
