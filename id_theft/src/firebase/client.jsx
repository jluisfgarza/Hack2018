// src/client.js
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBpxY8-jzPf5GFQO7vcke-8JOGk8EQ1vnw",
  authDomain: "idtheft-hack2018.firebaseapp.com",
  databaseURL: "https://idtheft-hack2018.firebaseio.com",
  projectId: "idtheft-hack2018",
  storageBucket: "idtheft-hack2018.appspot.com",
  messagingSenderId: "253753773199"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const auth = firebase.auth;
export const provider = new firebase.auth.FacebookAuthProvider();
