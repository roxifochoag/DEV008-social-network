import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { RecoverPassword } from './components/RecoverPassword.js';
import { Feed } from './components/Feed.js';

const rootDiv = document.getElementById('root');

const ProtectedRoute = (route) => {
  console.log('Protected route');
  return route;
};

const routes = {
  '/': Login,
  '/login': Login,
  '/register': Register,
  '/recoverPassword': RecoverPassword,
  '/feed': ProtectedRoute(Feed),
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
