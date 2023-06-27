import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { RecoverPassword } from './components/RecoverPassword.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Login,
  '/register': Register,
  '/recoverPassword': RecoverPassword,
};

export const onNavigate = (pathname) => {
  console.log(pathname);
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

rootDiv.appendChild(component());
