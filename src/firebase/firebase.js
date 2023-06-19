import  { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "firebase/auth"


const user = {
    name: "pepita perez",
    email: "pepita@perez.com",
    nick: "pepis",
    password: "123456"
}


singUp(user)

export const singUp =(user) =>{
   createUserWithEmailAndPassword(auth, user.email, user.password) 
   .then((userCredential) => {
    const userCreated = userCredential.user;
    console.log(userCredential)
    
    return userCreated
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode, " ", errorMessage)

    return error
  });

}