import { db } from "../firebase/credentials";
import { deleteDoc, collection, doc } from "firebase/firestore";

export async function deletePending(id) {
  try {
    const colletionRef = collection(db, "pendiente");
    const docRef = doc(colletionRef, id);
    const confirm = await deleteDoc(docRef);
    return confirm;
  } catch (error) {
    console.log(error);
  }
}
