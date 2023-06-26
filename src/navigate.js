export const onNavigate = (pathname) => {
    console.log(pathname);
    window.history.pushState({}, pathname, window.location.origin + pathname);
    rootDiv.appendChild(routes[pathname]());
  };