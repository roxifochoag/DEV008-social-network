import { signIn } from '../firebase/firebase.js';

export const Login = () => {
  // creando el elemento div que contiene todo el Login
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'container';
  // Elemento
  const formSignInDivDiv = document.createElement('div');
  formSignInDivDiv.className = 'forms-container';
  // creando elementos del formulario

  const formSignIn = document.createElement('form');
  formSignIn.className = 'signin-signup';
  formSignIn.action = '#';

  const formHeaderDiv = document.createElement('div');
  formHeaderDiv.className = 'form-header-div';
  // creando el titulo del login

  const title = document.createElement('h2');
  title.classname = 'title';
  title.textContent = 'Bienvenida!';
  // creando el subtitulo del login

  const subtitle = document.createElement('h3');
  subtitle.classname = 'subtitle';
  subtitle.textContent = 'Inicia sesión con tu correo registrado';
  // creando input de mail usuario dentro de un div con un icon

  const inputFieldUserMail = document.createElement('div');
  inputFieldUserMail.className = 'input-field';

  // Crear el segundo elemento i con clase "fas fa-user"
  const iconUserMail = document.createElement('i');
  iconUserMail.className = 'fas fa-user';
  // Crear el segundo input con tipo "text", clase "username-register"
  // placeholder "Ingresa tu usuario", y nombre "Username"
  const userMail = document.createElement('input');
  userMail.type = 'text';
  userMail.className = 'usermail-register';
  userMail.placeholder = 'Ingresa su mail';
  userMail.name = 'Usermail';
  userMail.required = true;

  // Agregar el icono al segundo div de campo de entrada
  inputFieldUserMail.appendChild(iconUserMail);
  inputFieldUserMail.appendChild(userMail);

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

  // Crear el elemento input para el botón de enviar
  const submitBtn = document.createElement('input');
  submitBtn.type = 'submit';
  submitBtn.className = 'btn';
  submitBtn.value = 'Iniciar sesión';

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
  HomeDiv.appendChild(formSignInDivDiv);
  formSignInDivDiv.appendChild(formSignIn);
  formSignIn.appendChild(formHeaderDiv);
  formHeaderDiv.appendChild(title);
  formHeaderDiv.appendChild(subtitle);
  formSignIn.appendChild(inputFieldUserMail);
  formSignIn.appendChild(inputFieldPss1);
  formSignIn.appendChild(submitBtn);
  formSignIn.appendChild(socialText);
  formSignIn.appendChild(socialMediaDiv);

  // evento que va a guardar el registro del usuario
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('miuser', formSignIn.elements);

    const user = {
      email: formSignIn.elements.Usermail.value,
      password: formSignIn.elements.Password.value,
    };
    console.log('Llamada');
    signIn(user);
    console.log('Proceso');
  });

  return HomeDiv;
};
