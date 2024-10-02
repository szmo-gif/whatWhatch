import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../API/firebase"

export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential
  } catch (error) {
    console.log(error)
  }
}