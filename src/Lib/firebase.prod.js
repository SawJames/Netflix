import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyD8DZ2q86hCCe136K_-fKRwFaFAY94BRZY",
    authDomain: "netflix-4ce19.firebaseapp.com",
    projectId: "netflix-4ce19",
    storageBucket: "netflix-4ce19.appspot.com",
    messagingSenderId: "357285423797",
    appId: "1:357285423797:web:dfecff8f4145c500ce2cfc"
  };

  const firebase = Firebase.initializeApp(config)

  export {firebase}