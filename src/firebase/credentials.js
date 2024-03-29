import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBW_FQlr_YwH7r48sOvdqRcwclTJhWRpBY",
  authDomain: "react-firebase-eabb5.firebaseapp.com",
  projectId: "react-firebase-eabb5",
  storageBucket: "react-firebase-eabb5.appspot.com",
  messagingSenderId: "525963196914",
  appId: "1:525963196914:web:25bd3ca15a2080a998136b",
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export default firebaseApp;
