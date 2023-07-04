import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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

export const signInGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);

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

    localStorage.setItem('userCredentials', JSON.stringify(result));
    window.location.assign('/feed');
    window.alert('Ingreso Exitoso');
  } catch (error) {
    console.error(error);
  }
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
