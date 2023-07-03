import { storage } from "../firebase/credentials";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

export async function uploadFile(file) {
  //deleteObject(`archivo/${file.name}`);//eliminar archivo
  try {
    const fileRef = ref(storage, `archivo/${file.name}`);
    await uploadBytes(fileRef, file);

    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.log(error);
  }
}
