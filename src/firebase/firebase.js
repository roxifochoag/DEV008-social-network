import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth';
import {
  setDoc,
  doc,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
  getDoc,
  arrayUnion,
  arrayRemove,
  onSnapshot,
} from 'firebase/firestore';
import {
  auth,
  googleProvider,
  db,
} from './config.js';

/*
|-----------------------------------------|
|             Register - SignUp           |
|-----------------------------------------|
*/
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
    if (error.code === 'auth/email-already-in-use') {
      throw new Error('Correo electrónico ya registrado.');
    } else if (error.code === 'auth/invalid-email') {
      throw new Error('Correo invalido.');
    } else if (error.code === 'auth/weak-password') {
      throw new Error('Contraseña debil.');
    } else {
      // eslint-disable-next-line no-alert
      window.alert(`Error al registro: ${error.code}`);
    }
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

export const getCurrentUser = () => auth.currentUser.email;
/*
|-----------------------------------------|
|             Login - signInGoogle        |
|-----------------------------------------|
*/
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
    localStorage.setItem('userCredentials', JSON.stringify({
      userID: userCredentials.user.uid,
      username: userCredentials.user.displayName,
      picture: userCredentials.user.photoURL,
      email: userCredentials.user.email,
    }));
    window.location.assign('/feed');
    window.alert('Ingreso Exitoso');
  } catch (error) {
    window.alert(`google login error: ${error.message}`);
  }
};

/*
|-----------------------------------------|
|              Login - signIn             |
|-----------------------------------------|
*/
export const signIn = async (user) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password);
    localStorage.setItem('userCredentials', JSON.stringify({
      email: userCredentials.user.email,
      userID: userCredentials.user.uid,
    }));
    window.location.assign('/feed');
    // eslint-disable-next-line no-alert
    window.alert('Ingreso Exitoso');
  } catch (error) {
    if (error.code === 'auth/invalid-email') {
      throw new Error('Correo electrónico no es válido.');
    } else if (error.code === 'auth/user-not-found') {
      throw new Error('No se encontró ningún usuario con ese correo.');
    } else if (error.code === 'auth/wrong-password') {
      throw new Error('Contraseña incorrecta.');
    }
    // window.alert(`Error al iniciar sesión: ${error.message}`);
    // console.log(error.code);
  }
};
/*
|-----------------------------------------|
|             POST - savePost             |
|-----------------------------------------|
*/
export const savePost = async (text) => (
  addDoc(collection(db, 'post'), {
    text,
    author: doc(db, '/users', auth.currentUser.uid),
    timeline: Date.now(),
    liked_by: [],
  })
);

/*
|-----------------------------------------|
|             POST - updatePost           |
|-----------------------------------------|
*/
export const updatePost = (postRef, post) => {
  const user = auth.currentUser.uid;
  updateDoc(postRef, { text: post, timeline: Date.now() })
    .then(() => {
      console.log('Post actualizado');
      console.log('del Usuario', user);
    })
    .catch((error) => {
      console.error('Error al editar el post:', error);
    });
};
/*
// |-----------------------------------------|
// |             POST - getPost           |
// |-----------------------------------------|
// */
// export const getPost = (postRef) => new Promise((resolve, reject) => {
//   getDoc(postRef)
//     .then((post) => {
//       resolve(post.data());
//     })
//     .catch((error) => {
//       console.error('Error al traer el post:', error);
//       reject(error);
//     });
// });
/*
|---------------------------------------------|
|             POST - updateLikePost           |
|---------------------------------------------|
*/
export const updateLikePost = async (postRef, freshPost) => {
  const userRef = doc(db, 'users', auth.currentUser.uid);
  const userAlreadyLiked = freshPost.liked_by.find((lover) => lover.path === userRef.path);
  if (userAlreadyLiked) {
    await updateDoc(postRef, {
      liked_by: arrayRemove(userRef),
    });

    return '/img/heart-fill-white.svg';
  }
  await updateDoc(postRef, {
    liked_by: arrayUnion(userRef),
  });

  return '/img/heart-fill-custom.svg';
};
/*
|-----------------------------------------|
|             POST - deletePost           |
|-----------------------------------------|
*/
export const deletePost = (postId) => {
  deleteDoc(doc(db, 'post', postId))
    .then(() => {
      console.log('Post eliminado', postId);
    })
    .catch((error) => {
      console.error('Error al eliminar el post:', error);
    });
};

/*
|----------------------------------------------|
|             POST - get data author           |
|----------------------------------------------|
*/
export const getDataAuthor = (ref) => new Promise((resolve, reject) => {
  getDoc(ref).then((authorDocument) => {
    resolve(authorDocument.data());
  }).catch((error) => {
    reject(error);
  });
});

/*
|-----------------------------------------|
|             POST - showPosts            |
|-----------------------------------------|
*/
export const showPosts = query(collection(db, 'post'), orderBy('timeline', 'asc'));

/*
|----------------------------------------------|
|   Muestra la base actualizada del firestore  |
|----------------------------------------------|
*/
export const listenToPosts = (callback) => {
  onSnapshot(showPosts, callback);
};

export const getUserByUserID = (userid) => getDoc(doc(db, 'users', userid))
  .then((user) => user.data());
