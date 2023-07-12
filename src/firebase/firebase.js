import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged
} from 'firebase/auth';
import {
  setDoc,
  doc,
  collection,
  onSnapshot,
  addDoc,
  getDocs,
  query,
  orderBy,
  getDoc
} from 'firebase/firestore';
/*
import { async } from 'regenerator-runtime';
*/
import { auth, googleProvider, db } from './config.js';

export const signUp = async (user) => {
  try {
    const firebaseUser = await createUserWithEmailAndPassword(auth, user.email, user.password);

    await setDoc(doc(db, 'users', firebaseUser.user.uid), {
      first_name: user.name,
      last_name: user.lastName,
      username: user.username,
      email: user.email,
      picture: '',
    });
    window.location.assign('/login');
    window.alert('Registro exitoso');
  } catch (error) {
    console.log({ error });
  }
};

// export const getUser = async (email) => new Promise((resolve, reject) => {
//   const user = [];
//   const usersRef = collection(db, 'users');
//   const q = query(usersRef, where('email', '==', email));
//   getDocs(q)
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         user.push(doc.data());
//         return doc.data();
//       });
//       console.log(user);
//       resolve(user[0]);
//     }).catch((error) => {
//       reject(error);
//     });
// });

export const signInGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredentials = await signInWithPopup(auth, googleProvider);
    await setDoc(doc(db, 'users', userCredentials.user.uid), {
      first_name: userCredentials.user.displayName,
      last_name: '',
      username: userCredentials.user.displayName,
      email: userCredentials.user.email,
      picture: userCredentials.user.photoURL,
    });
    window.location.assign('/feed');
    window.alert('Ingreso Exitoso');
  } catch (error) {
    console.error(error);
  }
};

// SignIn
export const signIn = async (user) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password);
    console.log(userCredentials);
    // localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
    window.location.assign('/feed');
    window.alert('Ingreso Exitoso');
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }
};

export const savePost = async (text) => (
  addDoc(collection(db, 'post'), {
    text,
    author: doc(db, '/users', auth.currentUser.uid),
    timeline: Date.now(),
    liked_by: [],
  })
);

export const showPosts = async () => getDocs(query(collection(db, 'post'), orderBy('timeline', 'asc')));

export const updatePost = (post) => {
  onSnapshot(doc(db, 'post', post.author.id), () => {
    console.log('snapshot hecho');
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
