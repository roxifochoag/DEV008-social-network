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
  getDocs,
  query,
  orderBy,
  /*
  serverTimestamp,
  */
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
    window.alert(`register error: ${error.message}`);
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
/*
|-----------------------------------------|
|             Loguin - signInGoogle       |
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
    }));
    window.location.assign('/feed');
    window.alert('Ingreso Exitoso');
  } catch (error) {
    window.alert(`google login error: ${error.message}`);
  }
};

/*
|-----------------------------------------|
|              Loguin - signIn            |
|-----------------------------------------|
*/
export const signIn = async (user) => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const userCredentials = await signInWithEmailAndPassword(auth, user.email, user.password);

    console.log(userCredentials);
    localStorage.setItem('userCredentials', JSON.stringify({
      email: userCredentials.user.email,
      userID: userCredentials.user.uid,
    }));
    window.location.assign('/feed');
    window.alert('Ingreso Exitoso');
  } catch (error) {
    window.alert(`login error: ${error.message}`);
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
|             POST - showPosts            |
|-----------------------------------------|
*/
export const showPosts = async () => getDocs(query(collection(db, 'post'), orderBy('timeline', 'asc')));
/*
|-----------------------------------------|
|             POST - updatePost           |
|-----------------------------------------|
*/
export const updatePost = (postId, Newpost) => {
  const user = auth.currentUser.uid;
  const postRef = doc(db, 'post', postId);
  updateDoc(postRef, { text: Newpost, timeline: Date.now() })
    .then(() => {
      console.log('Post actualizado ', postId);
      console.log('del Usuario', user);
    })
    .catch((error) => {
      console.error('Error al editar el post:', error);
    });
};
/*
|-----------------------------------------|
|             POST - getPost           |
|-----------------------------------------|
*/
export const getPost = (postID) => {
  const postRef = doc(db, 'post', postID);
  return new Promise((resolve, reject) => {
    getDoc(postRef)
      .then((post) => {
        resolve(post.data());
      })
      .catch((error) => {
        console.error('Error al traer el post:', error);
        reject(error);
      });
  });
};
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
  } await updateDoc(postRef,
    { liked_by: arrayUnion(userRef) });
  return '/img/heart-fill-custom.svg';
};
/*
|-----------------------------------------|
|             POST - deletePost           |
|-----------------------------------------|
*/
export const deletePost = (post) => {
  const user = auth.currentUser.uid;
  const postRef = doc(db, 'post', post);
  deleteDoc(postRef)
    .then(() => {
      console.log('Post eliminado', post);
      console.log('del Usuario', user);
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
/* eslint-disable */
export const getDataAuthor = (ref) => {
  return new Promise((resolve, reject) => {
    getDoc(ref)
      .then((authorDocument) => {
        resolve(authorDocument.data());
      })
      .catch((error) => {
        reject(error);
      });
  });
};
/* eslint-enable */
/*
|-----------------------------------------|
|             Recover password            |
|-----------------------------------------|
*/
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

export const listenPost = (addPost) => {
  onSnapshot(
    collection(db, 'post'),
    (querySnapshot) => {
      querySnapshot.forEach((document) => {
        addPost(document.data());
      });
    },
  );
};

export const getUserByUserID = (userid) => getDoc(doc(db, 'users', userid))
  .then((user) => user.data());
