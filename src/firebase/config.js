import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBfFeaoL3UtHvLFceb-kE8ziE2fC2MdzEo",
    authDomain: "modern-react-app-5ab99.firebaseapp.com",
    projectId: "modern-react-app-5ab99",
    storageBucket: "modern-react-app-5ab99.appspot.com",
    messagingSenderId: "433135622498",
    appId: "1:433135622498:web:090e3a05f641fbac13f43b"
  };

  initializeApp (firebaseConfig);

  const db=getFirestore();
  const auth=getAuth();

  export {db,auth}