import firebase from 'firebase'
import 'firebase/database'

  var firebaseApp = firebase.initializeApp({apiKey: "AIzaSyDdzuQJlRBiTUlfA43_pOBnJy-fAZUIz6U",
  authDomain: "weds-e0efb.firebaseapp.com",
  projectId: "weds-e0efb",
  storageBucket: "weds-e0efb.appspot.com",
  messagingSenderId: "556512913666",
  appId: "1:556512913666:web:ad5080610d332113fafa1b",
  measurementId: "G-3HT8M9MYDZ"})

  var db = firebaseApp.firestore()
  export default db