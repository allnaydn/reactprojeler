import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB6WOJu0M3JUiatwCNrwKI257GANlahs7k",
    authDomain: "modern-react-test.firebaseapp.com",
    projectId: "modern-react-test",
    storageBucket: "modern-react-test.appspot.com",
    messagingSenderId: "428399949155",
    appId: "1:428399949155:web:b37e71e265a62577374f56"
};

initializeApp(firebaseConfig);

const db=getFirestore();
const auth=getAuth();

export {db,auth}

