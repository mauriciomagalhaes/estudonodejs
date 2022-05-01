import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBw8nQJec7_eDXeuE6HiTpVz3r4E64jgLw",
    authDomain: "miniblog-3ea24.firebaseapp.com",
    projectId: "miniblog-3ea24",
    storageBucket: "miniblog-3ea24.appspot.com",
    messagingSenderId: "839459386620",
    appId: "1:839459386620:web:3f7a3f9f3922b64915d379",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
