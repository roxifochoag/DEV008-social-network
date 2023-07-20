/* eslint-disable no-console */
/* eslint-disable no-alert */
import { signUp, getUserByUsername } from '../firebase/firebase.js';

export const Register = () => {
  // creando el elemento div que contiene todo el registro
  const signUpDiv = document.createElement('div');
  signUpDiv.className = 'signup';

  // lado derecho (ilustracion en este caso)
  const loginUpRightDiv = document.createElement('section');
  loginUpRightDiv.className = 'transition-div2';

  const loginLeftDivHeader = document.createElement('div');
  loginLeftDivHeader.className = 'transition-header2';

  const logo = document.createElement('img');
  logo.src = 'img/Logo.png';
  logo.className = 'Logo';
  logo.alt = 'vertical-logo';

  const subTitle = document.createElement('h2');
  subTitle.innerText = '¿Estas registrado?';
  subTitle.className = 'smaller-subtitle';

  const brandDescription = document.createElement('p');
  brandDescription.innerText = 'Warmi es la primera red social para mujeres latinas que viven fuera de sus paises de origen';
  brandDescription.className = 'warmi-summary';

  const transparentBtn = document.createElement('button');
  transparentBtn.innerHTML = 'iniciar sesión ';
  transparentBtn.className = 'btn transparent';

  // lado izquierdo (formulario de registro en este caso)
  const formSignUp = document.createElement('form');
  formSignUp.className = 'sign-up-form';
  formSignUp.action = '#';

  const title = document.createElement('h3');
  title.className = 'title';
  title.textContent = 'Crea tu cuenta';

  const subtitle = document.createElement('h4');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'Con esta cuenta podrás conectar con otras mujeres latinas que se encuentran alrededor del mundo';

  const closer = document.createElement('div');
  closer.className = 'closer';

  // --------------------name---------------------
  // creando input de nombre usuario dentro de un div con un icon
  const inputFieldName = document.createElement('div');
  inputFieldName.className = 'input-field-short';
  // Crear el segundo elemento i con clase "fas fa-user"
  const iconName = document.createElement('i');
  iconName.className = 'fas fa-user';

  // Crear el segundo input con tipo "text", clase "username-register"
  // placeholder "Ingresa tu usuario", y nombre "Username"
  const userName1 = document.createElement('input');
  userName1.type = 'text';
  userName1.className = 'name-register';
  userName1.placeholder = 'Nombre';
  userName1.id = 'Name';
  userName1.name = 'Name';
  userName1.required = true;

  // Agregar el icono al segundo div de campo de entrada
  inputFieldName.appendChild(iconName);
  inputFieldName.appendChild(userName1);

  // --------------------lastname---------------------
  // creando input de nombre usuario dentro de un div con un icon
  const inputFieldLastName = document.createElement('div');
  inputFieldLastName.className = 'input-field-short';

  // Crear el segundo elemento i con clase "fas fa-user"
  const iconLastName = document.createElement('i');
  iconLastName.className = 'fas fa-user';

  // Crear el segundo input con tipo "text", clase "username-register"
  // placeholder "Ingresa tu usuario", y nombre "Username"
  const userLastName = document.createElement('input');
  userLastName.type = 'text';
  userLastName.className = 'lastName-register';
  userLastName.placeholder = 'Apellidos';
  userLastName.name = 'Lastname';
  userLastName.required = true;

  // Agregar el icono al segundo div de campo de entrada
  inputFieldLastName.appendChild(iconLastName);
  inputFieldLastName.appendChild(userLastName);
  closer.appendChild(inputFieldName);
  closer.appendChild(inputFieldLastName);

  // --------------------username---------------------
  // creando input de nombre usuario dentro de un div con un icon
  const inputFieldUserName = document.createElement('div');
  inputFieldUserName.className = 'input-field';

  // Crear el segundo elemento i con clase "fas fa-user"
  const iconUserName = document.createElement('i');
  iconUserName.className = 'fas fa-user';

  // Crear el segundo input con tipo "text", clase "username-register"
  // placeholder "Ingresa tu usuario", y nombre "Username"
  const userName = document.createElement('input');
  userName.type = 'text';
  userName.className = 'username-register';
  userName.placeholder = 'Ingresa tu usuario';
  userName.name = 'Username';
  userName.required = true;

  // Agregar el icono al segundo div de campo de entrada
  inputFieldUserName.appendChild(iconUserName);
  inputFieldUserName.appendChild(userName);

  // --------------------------mail-----------------------------------
  // creando input de email dentro de un div con un icon
  const inputFieldEmail = document.createElement('div');
  inputFieldEmail.className = 'input-field';

  const iconEmail = document.createElement('i');
  iconEmail.className = 'fas fa-envelope';

  const email1 = document.createElement('input');
  email1.type = 'email';
  email1.className = 'mail-register';
  email1.placeholder = 'Ingresa tu email';
  email1.name = 'Mail';
  email1.required = true;

  inputFieldEmail.appendChild(iconEmail);
  inputFieldEmail.appendChild(email1);
  // -----------------------------------------------------------------
  // creando input de contraseña dentro de un div con un icon
  const closer1 = document.createElement('div');
  closer1.className = 'closer';

  const inputFieldPss1 = document.createElement('div');
  inputFieldPss1.className = 'input-field-short';

  const iconPassword1 = document.createElement('i');
  iconPassword1.className = 'fas fa-lock';

  const password1 = document.createElement('input');
  password1.type = 'password';
  password1.className = 'password-register';
  password1.placeholder = 'Contraseña';
  password1.name = 'Password';
  password1.required = true;

  inputFieldPss1.appendChild(iconPassword1);
  inputFieldPss1.appendChild(password1);

  // creando input de contraseña dos dentro de un div con un icon
  const inputFieldPss2 = document.createElement('div');
  inputFieldPss2.className = 'input-field-short';

  const iconPassword2 = document.createElement('i');
  iconPassword2.className = 'fas fa-lock';

  const password2 = document.createElement('input');
  password2.type = 'password';
  password2.className = 'password-register';
  password2.placeholder = 'Confirmar';
  password2.name = 'Password';
  password2.required = true;

  inputFieldPss2.appendChild(iconPassword2);
  inputFieldPss2.appendChild(password2);
  closer1.appendChild(inputFieldPss1);
  closer1.appendChild(inputFieldPss2);
  // crear label de subscripción
  const labelNews = document.createElement('label');
  labelNews.setAttribute('for', 'subscribeNews');

  // Crear el input checkbox para la suscripción a noticias
  const suscribe = document.createElement('input');
  suscribe.type = 'checkbox';
  suscribe.id = 'subscribeNews';
  suscribe.value = 'newsletter';
  suscribe.name = 'subscribe';
  // suscribe.required = true;

  // Crear el texto para la suscripción a noticias
  const textReceiveNews = document.createTextNode('Deseo recibir noticias y novedades de Warmi a mi correo');

  labelNews.appendChild(suscribe);
  labelNews.appendChild(textReceiveNews);

  // Crear el elemento label para las políticas y condiciones
  const labelCond = document.createElement('label');
  labelCond.setAttribute('for', 'conditions');

  // Crear el input checkbox para las políticas y condiciones
  const inputCond = document.createElement('input');
  inputCond.type = 'checkbox';
  inputCond.id = 'conditions';
  inputCond.value = 'conditions';
  inputCond.name = 'conditions';
  inputCond.required = true;

  // Crear el texto para las políticas y condiciones
  const labelPolitics = document.createTextNode('Estoy de acuerdo con las políticas y condiciones');

  // Crear el elemento de enlace para leer más
  const linkConditions = document.createElement('a');
  linkConditions.href = '/src/conditions.html';
  linkConditions.className = 'link1';
  linkConditions.textContent = 'Leer aquí';

  labelCond.appendChild(inputCond);
  labelCond.appendChild(labelPolitics);
  labelCond.appendChild(linkConditions);

  // Crear el elemento input para el botón de enviar
  const submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.className = 'btn';
  submitBtn.value = 'Crear mi cuenta';

  // append child de cada elemento agregado al form
  formSignUp.appendChild(title);
  formSignUp.appendChild(subtitle);
  formSignUp.appendChild(closer);
  formSignUp.appendChild(inputFieldUserName);
  formSignUp.appendChild(inputFieldEmail);
  formSignUp.appendChild(closer1);
  formSignUp.appendChild(labelCond);
  formSignUp.appendChild(labelNews);
  formSignUp.appendChild(submitBtn);

  signUpDiv.appendChild(loginUpRightDiv);
  loginUpRightDiv.appendChild(loginLeftDivHeader);
  loginLeftDivHeader.appendChild(logo);
  loginLeftDivHeader.appendChild(subTitle);
  loginLeftDivHeader.appendChild(brandDescription);
  loginLeftDivHeader.appendChild(transparentBtn);
  signUpDiv.appendChild(formSignUp);

  /*
|----------------------------------------------------|
|     Funcionalidad de Boton Registrar usuario       |
|----------------------------------------------------|
  */
  submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const username = formSignUp.elements.Username.value;
    const user = {
      name: formSignUp.elements.Name.value,
      lastName: formSignUp.elements.Lastname.value,
      email: formSignUp.elements.Mail.value,
      username,
      password: formSignUp.elements.Password[0].value,
    };

    const existingUsername = await getUserByUsername(username);
    if (existingUsername) {
      window.alert('Nombre de usuario ya esta en uso.');
      return;
    }

    await signUp(user);
  });

  transparentBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.assign('/login');
  });

  return signUpDiv;
};
