import { signUp } from '../firebase/firebase.js';

export const Register = () => {
  // creando el elemento div que contiene todo el registro
  const signUpDiv = document.createElement('div');
  signUpDiv.className = 'signin-signup';

  // creando el elemento formulario
  const formSignUp = document.createElement('form');
  formSignUp.className = 'sign-up-form';
  formSignUp.action = '#';

  // creando el titulo del registr
  const title = document.createElement('h3');
  title.className = 'title';
  title.textContent = 'Crea tu cuenta';

  // creando subtitulo registro
  const subtitle = document.createElement('h4');
  subtitle.className = 'subtitle';
  subtitle.textContent = 'Con esta cuenta podrás conectar con otras mujeres latinas que se encuentran alrededor del mundo';

  // creando input de email dentro de un div con un icon
  const inputFieldEmail = document.createElement('div');
  inputFieldEmail.className = 'input-field';

  const iconEmail = document.createElement('i');
  iconEmail.className = 'fas fa-envelope';

  const email = document.createElement('input');
  email.type = 'email';
  email.className = 'mail-register';
  email.placeholder = 'Ingresa tu email';
  email.name = 'Mail';
  email.required = true;

  inputFieldEmail.appendChild(iconEmail);
  inputFieldEmail.appendChild(email);

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

  // creando input de contraseña dentro de un div con un icon
  const inputFieldPss1 = document.createElement('div');
  inputFieldPss1.className = 'input-field';

  const iconPassword1 = document.createElement('i');
  iconPassword1.className = 'fas fa-lock';

  const password1 = document.createElement('input');
  password1.type = 'password';
  password1.className = 'password-register';
  password1.placeholder = 'Ingresa tu contraseña';
  password1.name = 'Password';
  password1.required = true;

  inputFieldPss1.appendChild(iconPassword1);
  inputFieldPss1.appendChild(password1);

  // creando input de contraseña dos dentro de un div con un icon
  const inputFieldPss2 = document.createElement('div');
  inputFieldPss2.className = 'input-field';

  const iconPassword2 = document.createElement('i');
  iconPassword2.className = 'fas fa-lock';

  const password2 = document.createElement('input');
  password2.type = 'password';
  password2.className = 'password-register';
  password2.placeholder = 'Repite tu contraseña';
  password2.name = 'Password';
  password2.required = true;

  inputFieldPss2.appendChild(iconPassword2);
  inputFieldPss2.appendChild(password2);

  // crear label de subscribcion
  const labelNews = document.createElement('label');
  labelNews.setAttribute('for', 'subscribeNews');

  // Crear el input checkbox para la suscripción a noticias
  const suscribe = document.createElement('input');
  suscribe.type = 'checkbox';
  suscribe.id = 'subscribeNews';
  suscribe.value = 'newsletter';
  suscribe.name = 'subscribe';
  suscribe.required = true;

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

  // Crear el elemento p para el texto de redes sociales
  const socialText = document.createElement('p');
  socialText.className = 'social-text';
  socialText.textContent = 'Regístrate con tus redes sociales:';

  // Crear el elemento div con clase "social-media"
  const socialMediaDiv = document.createElement('div');
  socialMediaDiv.className = 'social-media';

  // Crear los enlaces de redes sociales
  const googleLink = document.createElement('a');
  googleLink.href = '#';
  googleLink.className = 'social-icon';
  const googleIcon = document.createElement('i');
  googleIcon.className = 'fab fa-google';
  googleLink.appendChild(googleIcon);

  const appleLink = document.createElement('a');
  appleLink.href = '#';
  appleLink.className = 'social-icon';
  const appleIcon = document.createElement('i');
  appleIcon.className = 'fab fa-apple';
  appleLink.appendChild(appleIcon);

  const microsoftLink = document.createElement('a');
  microsoftLink.href = '#';
  microsoftLink.className = 'social-icon';
  const microsoftIcon = document.createElement('i');
  microsoftIcon.className = 'fab fa-microsoft';
  microsoftLink.appendChild(microsoftIcon);

  // Agregar los enlaces al div de redes sociales
  socialMediaDiv.appendChild(googleLink);
  socialMediaDiv.appendChild(appleLink);
  socialMediaDiv.appendChild(microsoftLink);

  // append child de cada elemento agregado al form
  formSignUp.appendChild(title);
  formSignUp.appendChild(subtitle);
  formSignUp.appendChild(inputFieldEmail);
  formSignUp.appendChild(inputFieldUserName);
  formSignUp.appendChild(inputFieldPss1);
  formSignUp.appendChild(inputFieldPss2);
  formSignUp.appendChild(labelCond);
  formSignUp.appendChild(labelNews);
  formSignUp.appendChild(submitBtn);
  formSignUp.appendChild(socialText);
  formSignUp.appendChild(socialMediaDiv);

  signUpDiv.appendChild(formSignUp);

  // evento que va a guardar el registro del usuario
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(formSignUp.elements);

    const user = {
      email: formSignUp.elements.Mail.value,
      name: formSignUp.elements.Username.value,
      password: formSignUp.elements.Password[0].value,
    };

    signUp(user);
    window.location.assign('/login');
  });

  

  return signUpDiv;
};
