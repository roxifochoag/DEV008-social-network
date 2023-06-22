export const Home=() =>{
 const HomeDiv = document.createElement('div');
 const buttonRegister = document.createElement('button');
 const buttonLogin = document.createElement('button');
 const buttonRecoverPassword = document.createElement('button');

 buttonRegister.textContent = 'Registrate';
 buttonLogin.textContent = 'Inicia sesion';
 buttonRecoverPassword.textContent = 'Recupera tu contraseña';

 HomeDiv.appendChild(buttonRegister);
 HomeDiv.appendChild(buttonLogin);
 HomeDiv.appendChild(buttonRecoverPassword);
 
 return HomeDiv;
};