import { db } from "../firebase/credentials";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";

export async function searchPending(string) {
  try {
    const colletionRef = collection(db, "pendiente");
    const queryDescription = query(
      colletionRef,
      where("description", "==", string),
      orderBy("description", "asc"),
      limit(4)
    );

    const queryContact = query(colletionRef, where("contact", "==", string));

    const queryPriority = query(colletionRef, where("priority", "==", string));

    const docsEncript = await Promise.all([
      getDocs(queryDescription),
      getDocs(queryContact),
      getDocs(queryPriority),
    ]);

    const allResults = docsEncript.flatMap((doc) =>
      doc.docs.map((doc) => doc.data())
    );
    const setResults = new Set(allResults);
    //console.log(setResults);

    return Array.from(setResults);
  } catch (error) {
    console.log(error);
  }
}
