import { auth } from "../firebase/credentials";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

export async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    console.log(provider);
    signInWithRedirect(auth, provider);
  } catch (error) {
    console.log(error);
  }
}
