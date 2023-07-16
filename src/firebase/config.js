import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDsU1lODZMc7FdJd1WL34KeW_s4VQxBUlM",
  authDomain: "juegosplus-df73f.firebaseapp.com",
  projectId: "juegosplus-df73f",
  storageBucket: "juegosplus-df73f.appspot.com",
  messagingSenderId: "492380424116",
  appId: "1:492380424116:web:81c20a08549655dfad94e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDeDatos =getFirestore(app);