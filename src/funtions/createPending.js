import { db } from "../firebase/credentials";
import { collection, addDoc } from "firebase/firestore";

export async function createPending(data) {
  try {
    const collectionRef = collection(db, "pendiente");
    const pedienteId = await addDoc(collectionRef, data);
    console.log(pedienteId);
  } catch (error) {
    console.log(error);
  }
}
