import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmZh3VAKMewdf3GGGtoQJxKInE2rVnojw",
    authDomain: "ecommerce-adac3.firebaseapp.com",
    projectId: "ecommerce-adac3",
    storageBucket: "ecommerce-adac3.appspot.com",
    messagingSenderId: "285671945429",
    appId: "1:285671945429:web:1d5d87514d1265f9051e5c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //export

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.googleAuthProvider();