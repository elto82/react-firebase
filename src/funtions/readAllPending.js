import { db } from "../firebase/credentials";
import { collection, getDocs } from "firebase/firestore";

export async function getAllPending() {
  try {
    const collectionRef = collection(db, "pendiente");
    const dataEncrypted = await getDocs(collectionRef);
    const data = dataEncrypted.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    //console.log("documentos fb", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
