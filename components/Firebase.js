import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiuOxtDmB__HVQv1whyy-a0G_e4_7RgO0",
    authDomain: "hot-fire-chicken.firebaseapp.com",
    projectId: "hot-fire-chicken",
    storageBucket: "hot-fire-chicken.appspot.com",
    messagingSenderId: "547148004082",
    appId: "1:547148004082:web:f6317a44750d46e5feae6b"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
const db = getFirestore(app);

export default db;
