import {
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getRedirectResult,
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, googleProvider, db } from './config.js';

export const signUp = async (user) => {
  try {
    const firebaseUser = await createUserWithEmailAndPassword(auth, user.email, user.password);

    await setDoc(doc(db, 'users', firebaseUser.user.uid), {
      first_name: '',
      last_name: '',
      username: user.username,
    });
  } catch (error) {
    console.log({ error });
  }
};

export const signInGoogle = () => {
  signInWithRedirect(auth, googleProvider);
  getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      //    const user = result.user;
      console.log(
        'Este usuario se logueo con google',
        credential,
        'y el token',

        token,
      );
    })
    .catch((error) => {
      // Handle Errors here.
    //  const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      //   const credential = googleProvider.credentialFromError(error);
      console.log(error);
    // console.log(errorCode, errorMessage, email);
    });
};

// SignIn
export const signIn = (user) => {
  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((userCredential) => {
      console.log('usefb', userCredential);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

// export const resetPassword = (email) => {
//   sendPasswordResetEmail(auth, email)
//     .then((userEmail) => {
//       console.log('se envio un correo para cambiar contraseña!');

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorCode, errorMessage);

//       return error;
//     });
// };
