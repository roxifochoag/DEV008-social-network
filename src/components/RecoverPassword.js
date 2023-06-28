// import { resetPassword } from '../firebase/firebase.js';
export const RecoverPassword = () => {
  // creando el elemento div que contiene todo el registro
  const recoverPasswordDiv = document.createElement('div');
  recoverPasswordDiv.className = 'container';

  // lado izquierdo (ilustracion en este caso)
  const rPUpLeftDiv = document.createElement('section');
  rPUpLeftDiv.className = 'transition-div';

  const rPLeftDivHeader = document.createElement('div');
  rPLeftDivHeader.className = 'transition-header';

  const logo = document.createElement('img');
  logo.src = 'img/Logo.png';
  logo.className = 'Logo';
  logo.alt = 'vertical-logo';

  const brandDescription = document.createElement('p');
  brandDescription.innerText = 'Warmi es la primera red social para mujeres latinas que viven fuera de sus paises de origen';
  brandDescription.className = 'warmi-summary';

  const subTitle = document.createElement('p');
  subTitle.innerText = '¿Nueva en Warmi?';
  subTitle.className = 'smaller-subtitle';

  const transparentBtn = document.createElement('button');
  transparentBtn.innerHTML = 'registrate';
  transparentBtn.className = 'btn transparent';

  const illustrationContainer = document.createElement('div');
  illustrationContainer.className = 'illustration-container';

  const illustration = document.createElement('img');
  illustration.src = 'img/illustration-homepage.png';
  illustration.className = 'illustration';
  illustration.alt = 'girls-illustration';

  recoverPasswordDiv.appendChild(rPUpLeftDiv);
  rPUpLeftDiv.appendChild(rPLeftDivHeader);
  rPLeftDivHeader.appendChild(logo);
  rPLeftDivHeader.appendChild(brandDescription);
  rPLeftDivHeader.appendChild(subTitle);
  rPLeftDivHeader.appendChild(transparentBtn);
  rPUpLeftDiv.appendChild(illustrationContainer);
  illustrationContainer.appendChild(illustration);

  // lado derecho
  const rPRightDiv = document.createElement('section');
  rPRightDiv.className = 'forms-container';

  const formContainer = document.createElement('div');
  formContainer.className = 'signin-signup';

  const formSignIn = document.createElement('form');
  formSignIn.className = 'sign-in-form';
  formSignIn.action = '#';

  const title = document.createElement('h2');
  title.innerText = '¿Olvidaste tu contraseña?';
  title.className = 'title';

  const formSubTitle = document.createElement('h3');
  formSubTitle.innerText = '¡Nosotras te ayudamos!';
  formSubTitle.className = 'subtitle';

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

  const sendRecoveryPasswordButton = document.createElement('input');
  sendRecoveryPasswordButton.type = 'submit';
  sendRecoveryPasswordButton.value = 'Enviar enlace de recuperación';
  sendRecoveryPasswordButton.className = 'btn-save';

  const labelForSendMessage = document.createElement('label');
  labelForSendMessage.textContent = 'Te enviaremos un enlace de recuperacion a tu correo electrónico';
  labelForSendMessage.className = 'support-text';

  // lado derecho
  recoverPasswordDiv.appendChild(rPRightDiv);
  rPRightDiv.appendChild(formContainer);
  formContainer.appendChild(formSignIn);
  formSignIn.appendChild(title);
  formSignIn.appendChild(formSubTitle);
  formSignIn.appendChild(inputFieldEmail);
  formSignIn.appendChild(sendRecoveryPasswordButton);
  formSignIn.appendChild(labelForSendMessage);

  return recoverPasswordDiv;
};

// evento que envia el correo para cambio de contraseña
// sendRecoveryPasswordButton.addEventListener('click', (e) =>{
//   e.preventDefault();
//   const userEmail = formSignUp.elements.Mail.value;
//   resetPassword(userEmail);
// });
