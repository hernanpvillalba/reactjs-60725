import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore} from "firebase/firestore";
import productos from "../data/asyncMock";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// productos.forEach((prod) => {
//   addDoc(collection(db,"productos"),prod)
//   .then((el) =>{
//     console.log(`se agrego el producto ${el.id}`);
//   })
//   .catch((error) => console.log(error));
// });