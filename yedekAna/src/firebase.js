import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlVPapkhlxTVI99WaBVGqxnwQFY-crpuY",
  authDomain: "kobisredux.firebaseapp.com",
  projectId: "kobisredux",
  storageBucket: "kobisredux.appspot.com",
  messagingSenderId: "167743766328",
  appId: "1:167743766328:web:87019dbbbed46c51cf0bcd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth =getAuth(app);


 
 