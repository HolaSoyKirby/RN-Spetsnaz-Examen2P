import firebase from "firebase/app";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBIsYYtzAGqXy3KQs7vj7dSEcoH7RBx8ys",
  authDomain: "frifayerbeisrn.firebaseapp.com",
  projectId: "frifayerbeisrn",
  storageBucket: "frifayerbeisrn.appspot.com",
  messagingSenderId: "791962645717",
  appId: "1:791962645717:web:620c1a319e14da87021e5c"
  };

export default firebase.initializeApp(firebaseConfig)