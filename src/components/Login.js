export const Login=() =>{
    const HomeDiv = document.createElement('div');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
   
    buttonRegister.textContent = 'Registrate';
    buttonLogin.textContent = 'Inicia sesion';
   
    HomeDiv.appendChild(buttonRegister);
    HomeDiv.appendChild(buttonLogin);
   
    return HomeDiv;
   };