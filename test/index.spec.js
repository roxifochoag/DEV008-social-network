// importamos la funcion que vamos a testear
import {
  signUp,
  signIn,
  savePost,
  showPosts,
  /*
  signInGoogle,
  getUser,
  savePost,
*/

} from '../src/firebase/firebase.js';

// Importa las dependencias que necesites, como `jest`, `mocks`, etc.

describe('signUp', () => {
  it('debería registrar correctamente un usuario', async () => {
    // Crea un objeto de usuario de prueba
    const user = {
      name: 'Roxi',
      lastName: 'Ochoa García',
      username: 'cam125',
      email: 'cam@gmail.com',
      password: '123456',
    };

    // Crea mocks para las funciones y objetos externos que se utilizan dentro de la función signUp
    const auth = {
      createUserWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { uid: 'userId' } }),
    };
    const db = {
      doc: jest.fn(),
      setDoc: jest.fn(),
    };
    const window = {
      location: { assign: jest.fn() },
      alert: jest.fn(),
    };

    // Ejecuta la función signUp
    await signUp(user, auth, db, window);

    // Verifica que las funciones hayan sido llamadas con los argumentos correctos
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(user.email, user.password);
    expect(db.doc).toHaveBeenCalledWith(db, 'users', 'userId');
    expect(db.setDoc).toHaveBeenCalledWith({
      first_name: user.name,
      last_name: user.lastName,
      username: user.username,
      email: user.email,
    });
    expect(window.location.assign).toHaveBeenCalledWith('/login');
    expect(window.alert).toHaveBeenCalledWith('Registro exitoso');
  });

  it('debería manejar correctamente un error', async () => {
    // Crea un objeto de usuario de prueba
    const user = {
      name: 'Roxi',
      lastName: 'Ochoa García',
      username: 'cam125',
      email: 'cam@example.com',
      password: '123456',
    };

    // Crea mocks para las funciones y objetos externos que se utilizan dentro de la función signUp
    const auth = {
      createUserWithEmailAndPassword: jest.fn().mockRejectedValue(new Error('Error en el registro')),
    };
    const db = {
      doc: jest.fn(),
      setDoc: jest.fn(),
    };
    const consoleSpy = jest.spyOn(console, 'log');

    // Ejecuta la función signUp
    await signUp(user, auth, db);

    // Verifica que la función createUserWithEmailAndPassword
    //  haya sido llamada con los argumentos correctos
    expect(auth.createUserWithEmailAndPassword).toHaveBeenCalledWith(user.email, user.password);

    // Verifica que la función console.log haya sido llamada con el error
    expect(consoleSpy).toHaveBeenCalledWith({ error: new Error('Error en el registro') });
  });
});

// signIn

// Importa las dependencias que necesites, como `jest`, `mocks`, etc.

describe('signIn', () => {
  it('debería realizar el inicio de sesión correctamente', async () => {
    // Crea un objeto de usuario de prueba
    const user = {
      email: 'cam@gmail.com',
      password: 'password123',
    };

    // Crea mocks para las funciones y objetos externos que se utilizan dentro de la función signIn
    const auth = {
      signInWithEmailAndPassword: jest.fn().mockResolvedValue({ /* datos del usuario */ }),
    };
    const localStorageMock = {
      setItem: jest.fn(),
    };
    const window = {
      location: { assign: jest.fn() },
      alert: jest.fn(),
    };

    // Ejecuta la función signIn
    await signIn(user, auth, localStorageMock, window);

    // Verifica que las funciones hayan sido llamadas con los argumentos correctos
    expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(user.email, user.password);
    expect(localStorageMock.setItem).toHaveBeenCalledWith(
      'userCredentials',
      JSON.stringify({ /* datos del usuario */ }),
    );
    expect(window.location.assign).toHaveBeenCalledWith('/feed');
    expect(window.alert).toHaveBeenCalledWith('Ingreso Exitoso');
  });

  it('debería manejar correctamente un error', async () => {
    // Crea un objeto de usuario de prueba
    const user = {
      email: 'cam@google.com',
      password: 'password123',
    };

    // Crea mocks para las funciones y objetos externos que se utilizan dentro de la función signIn
    const auth = {
      signInWithEmailAndPassword: jest.fn().mockRejectedValue(new Error('Error en el inicio de sesión')),
    };
    const consoleSpy = jest.spyOn(console, 'log');

    // Ejecuta la función signIn
    await signIn(user, auth);

    // Verifica que la función signInWithEmailAndPassword
    // haya sido llamada con los argumentos correctos
    expect(auth.signInWithEmailAndPassword).toHaveBeenCalledWith(user.email, user.password);

    // Verifica que la función console.log haya sido llamada con el error
    expect(consoleSpy).toHaveBeenCalledWith(new Error('Error en el inicio de sesión'));
  });
});
// ---------------------------probar post
// save post
describe('savePost', () => {
  it('debería guardar correctamente un post', async () => {
    // Crea los datos de prueba
    const text = 'Este es un nuevo post';
    const name = 'Roxi Ochoa';

    // Crea mocks para las funciones y objetos externos
    // que se utilizan dentro de la función savePost
    const db = {
      collection: jest.fn(),
      addDoc: jest.fn().mockResolvedValue(),
    };
    const dateNowMock = jest.spyOn(Date, 'now').mockReturnValue(1625918400000); // 10 de julio de 2021

    // Ejecuta la función savePost
    await savePost(text, name, db);

    // Verifica que las funciones hayan sido llamadas con los argumentos correctos
    expect(db.collection).toHaveBeenCalledWith(db, 'post');
    expect(db.addDoc).toHaveBeenCalledWith({
      text,
      name,
      timeline: 1625918400000, // 10 de julio de 2021
    });

    // Restaura el comportamiento original de Date.now
    dateNowMock.mockRestore();
  });
});
// mostrar post
describe('showPosts', () => {
  it('debería obtener correctamente los posts', async () => {
    // Crea mocks para las funciones y objetos externos
    // que se utilizan dentro de la función showPosts
    const db = {
      collection: jest.fn(),
      query: jest.fn(),
      orderBy: jest.fn(),
      getDocs: jest.fn().mockResolvedValue(/* datos de prueba */),
    };

    // Ejecuta la función showPosts
    const result = await showPosts(db);

    // Verifica que las funciones hayan sido llamadas con los argumentos correctos
    expect(db.collection).toHaveBeenCalledWith(db, 'post');
    expect(db.query).toHaveBeenCalledWith(/* parámetros del query */);
    expect(db.orderBy).toHaveBeenCalledWith('timeline', 'asc');
    expect(db.getDocs).toHaveBeenCalled();

    // Verifica que la función devuelva el resultado esperado
    expect(result).toEqual(/* datos de prueba */);
  });
});
