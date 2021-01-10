import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAJQ3woulmv8sMFi8BIDohcutur4Trhn4M",
    authDomain: "snapchat-clone-96c77.firebaseapp.com",
    projectId: "snapchat-clone-96c77",
    storageBucket: "snapchat-clone-96c77.appspot.com",
    messagingSenderId: "964999309950",
    appId: "1:964999309950:web:42a8b63534608da6cc462f",
    measurementId: "G-H8H5YHEE90"
  };

  const initApp = firebase.initializeApp(firebaseConfig);
  export const db = initApp.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const provider = new firebase.auth.GoogleAuthProvider();
