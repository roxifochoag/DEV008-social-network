export const RecoverPassword=() =>{
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Recupera tu contraseña'

  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresa al Home';

  HomeDiv.appendChild(buttonHome);
   
    return HomeDiv;
};