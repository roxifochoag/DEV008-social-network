export const RecoverPassword = () => {
  const recoverPasswordDiv = document.createElement('div');
  recoverPasswordDiv.className = 'container';

  const recoverPasswordDivDiv = document.createElement('div');
  recoverPasswordDivDiv.className = 'forms-container';

  const formRecoverPassword = document.createElement('form');
  formRecoverPassword.className = 'signin-signup';
  formRecoverPassword.action = '#';

  const formHeaderDiv = document.createElement('div');
  formHeaderDiv.className = 'form-header-div';

  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = '¿Olvidaste tu contraseña?';

  const subtitle = document.createElement('h3');
  subtitle.className = 'subtitle';
  subtitle.textContent = '¡Nosotras te ayudamos!';

  const labelForMessage = document.createElement('label');
  labelForMessage.textContent = 'Ingresa el correo electrónico con el que te registraste';

  const inputFieldEmail = document.createElement('div');
  inputFieldEmail.className = 'input-field';

  const iconEmail = document.createElement('i');
  iconEmail.className = 'fas fa-envelope';

  const email = document.createElement('input');
  email.type = 'email';
  email.placeholder = 'Ingresa tu email';
  email.name = 'Mail';
  email.required = true;

  inputFieldEmail.appendChild(iconEmail);
  inputFieldEmail.appendChild(email);

  const formButtonDiv = document.createElement('div');
  formButtonDiv.className = 'form-button-div';

  const sendRecoveryPasswordButton = document.createElement('input');
  sendRecoveryPasswordButton.type = 'submit';
  sendRecoveryPasswordButton.placeholder = 'Enviar enlace de recuperación';
  sendRecoveryPasswordButton.className = 'btn-save';

  const labelForSendMessage = document.createElement('label');
  labelForSendMessage.textContent = 'Te enviaremos un enlace de recuperacion a tu correo electrónico';
  labelForSendMessage.className = 'support-text';

  recoverPasswordDiv.appendChild(recoverPasswordDivDiv);
  recoverPasswordDivDiv.appendChild(formRecoverPassword);
  formRecoverPassword.appendChild(formHeaderDiv);
  formHeaderDiv.appendChild(title);
  formHeaderDiv.appendChild(subtitle);
  formRecoverPassword.appendChild(labelForMessage);
  formRecoverPassword.appendChild(inputFieldEmail);
  formRecoverPassword.appendChild(formButtonDiv);
  formButtonDiv.appendChild(sendRecoveryPasswordButton);
  formRecoverPassword.appendChild(labelForSendMessage);

  return recoverPasswordDiv;
};
