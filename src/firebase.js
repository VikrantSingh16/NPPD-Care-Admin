import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyA2VvVQgk13E5F_gsYqay4xCpIVSeD1uNg",
    authDomain: "care-889fd.firebaseapp.com",
    projectId: "care-889fd",
    storageBucket: "care-889fd.appspot.com",
    messagingSenderId: "1063504482594",
    appId: "1:1063504482594:web:6a89d782c5ccfb02d1d57b",
    measurementId: "G-8T9E1B3GX4"
};

  firebase.initializeApp(firebaseConfig);
  export default firebase;