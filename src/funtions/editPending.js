import { db } from "../firebase/credentials";
import { collection, doc, setDoc, updateDoc } from "firebase/firestore";

export async function editPending(id, data) {
  try {
    const collectionRef = collection(db, "pendiente");
    const docRef = doc(collectionRef, id);

    //priority,{priority:1}
    const result = await setDoc(docRef, data, { merge: true });
    return result;
    //const result = await updateDoc(docRef, { priority: 4 });
  } catch (error) {
    console.log(error);
  }
}
