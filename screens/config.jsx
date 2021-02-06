
import * as firebase from 'firebase'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyEvDqXMcoFgDqjT2VqpIzIq31MxFUuQc",
    authDomain: "blooddonation-d7b14.firebaseapp.com",
    projectId: "blooddonation-d7b14",
    storageBucket: "blooddonation-d7b14.appspot.com",
    messagingSenderId: "528284927286",
    appId: "1:528284927286:web:4e0c2ba12efbc05a8cdf97",
    measurementId: "G-6MEX58JRRG"
}  // apiKey, authDomain, etc. (see above)


firebase.initializeApp(firebaseConfig);
const dbh = firebase.firestore();

export default dbh;
  
