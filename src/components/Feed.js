export const Feed = () => {
  // ---------------------------HEAD----------------------
  // Titulo del head
  const headFeed = document.createElement('head');
  const titleHeadFeed = document.createElement('title');
  titleHeadFeed.innerText = 'WarmiFeed';

  headFeed.appendChild(titleHeadFeed);

  // Encerrar todo el feed incluyendo header
  const divFeedPrincipal = document.createElement('div');

  // ---------------------------HEADER---------------------
  // Inicio del header
  // declaración de la clase del header
  const headerFeed = document.createElement('header');
  headerFeed.className = 'colorbackpink';
  // logo de warmi
  const brand = document.createElement('img');
  brand.className = 'logo';
  brand.src = '../img/icon-logo.png';
  brand.alt = 'logo';
  // Logo horizontal
  const brandHorizontal = document.createElement('img');
  brandHorizontal.className = 'logo-horizontal';
  brandHorizontal.src = '../img/logo-feed.png';
  brandHorizontal.alt = 'logo';
  // Estructura del boton
  // Boton
  const iconHideMenu = document.createElement('button');
  iconHideMenu.className = 'icon-hide-menu';

  const iconMenuCelphone = document.createElement('i');
  iconMenuCelphone.src = '../img/icon-menu-celphone.svg';
  // Barra de búsqueda
  const inputSearchBar = document.createElement('input');
  inputSearchBar.setAttribute('type', 'search');
  inputSearchBar.className = 'input-search-bar';
  inputSearchBar.placeholder = 'Buscar';
  // User image
  const userImage = document.createElement('div');
  userImage.className = 'user-image colorlightblue';
  // Fin del header

  headerFeed.appendChild(brand);
  headerFeed.appendChild(brandHorizontal);
  headerFeed.appendChild(iconHideMenu);
  iconHideMenu.appendChild(iconMenuCelphone);
  headerFeed.appendChild(inputSearchBar);
  headerFeed.appendChild(userImage);

  // ---------------------------MAIN---------------------
  // Crear div principal
  const centeredMainDiv = document.createElement('div');
  centeredMainDiv.className = 'centered-main';

  // Crear div flex-item-left
  const flexItemLeftDiv = document.createElement('div');
  flexItemLeftDiv.className = 'flex-item-left';

  const flexItemRightDiv = document.createElement('div');
  flexItemRightDiv.className = 'flex-item-right';

  // Crear aside
  const asideElement = document.createElement('aside');

  // Crear div trending-container
  const trendingContainerDiv = document.createElement('div');
  trendingContainerDiv.className = 'trending-container';

  // Crear div para el título de las tendencias
  const trendyTitleDiv = document.createElement('div');
  const trendyTitleH2 = document.createElement('h2');
  trendyTitleH2.className = 'trendy-title colorbackpink';
  trendyTitleH2.textContent = 'Tendencias';
  trendyTitleDiv.appendChild(trendyTitleH2);
  trendingContainerDiv.appendChild(trendyTitleDiv);

  // Crear div para hashtags
  const hashTagsDiv = document.createElement('div');
  const hashTagsH3 = document.createElement('h3');
  hashTagsH3.textContent = 'Hashtags';
  const hashTagTemplateP = document.createElement('p');
  hashTagTemplateP.className = 'hashtag-template';
  const seeAllHashTagsA = document.createElement('a');
  seeAllHashTagsA.textContent = 'ver todos';
  hashTagsDiv.appendChild(hashTagsH3);
  hashTagsDiv.appendChild(hashTagTemplateP);
  hashTagsDiv.appendChild(seeAllHashTagsA);
  trendingContainerDiv.appendChild(hashTagsDiv);
  hashTagTemplateP.textContent = '#mercadillolatino';
  // Crear div para grupos
  const groupsDiv = document.createElement('div');
  const groupsH3 = document.createElement('h3');
  groupsH3.textContent = 'Grupos';
  const groupContainerDiv = document.createElement('div');
  groupContainerDiv.className = 'group-container';
  const groupImg = document.createElement('img');
  groupImg.className = 'group-img colorlightblue';
  const groupTitleP = document.createElement('p');
  groupTitleP.className = 'group-title';
  groupTitleP.textContent = 'ingles basico para principiantes';
  groupContainerDiv.appendChild(groupImg);
  groupContainerDiv.appendChild(groupTitleP);
  const seeAllGroupsA = document.createElement('a');
  seeAllGroupsA.textContent = 'ver todos';
  groupsDiv.appendChild(groupsH3);
  groupsDiv.appendChild(groupContainerDiv);
  groupsDiv.appendChild(seeAllGroupsA);
  trendingContainerDiv.appendChild(groupsDiv);

  // Crear div para conversaciones
  const conversationsDiv = document.createElement('div');
  const conversationsH3 = document.createElement('h3');
  conversationsH3.textContent = 'Conversaciones';

  const conversationContainerDiv = document.createElement('div');
  conversationContainerDiv.className = 'conversation-container';

  const conversationContentDiv = document.createElement('div');
  conversationContentDiv.className = 'conversation-content';
  const conversationImg = document.createElement('img');
  conversationImg.className = 'conversation-img colorlightblue';
  conversationImg.src = '../img/istockphoto-1323400501-612x612.jpg';
  const textContainerDiv = document.createElement('div');
  textContainerDiv.className = 'text-container';
  const conversationNameP = document.createElement('p');
  conversationNameP.className = 'conversation-name';
  conversationNameP.textContent = 'Jennifer Heredia';
  const conversationPostP = document.createElement('p');
  conversationPostP.className = 'conversation-post';
  conversationPostP.textContent = 'Algun consejo para las que queremos irnos de viaje a Grecia?';

  const conversationActions = document.createElement('div');
  conversationActions.className = 'conversations-actions';
  const conversationImg1 = document.createElement('img');
  conversationImg1.className = 'messages-icon1';
  conversationImg1.src = '../img/chat-svgrepo-com.svg';
  conversationImg1.alt = 'message-icon-for-comment';
  const conversationImg2 = document.createElement('img');
  conversationImg2.className = 'messages-icon2';
  conversationImg2.src = '../img/heart-svgrepo-com.svg';
  conversationImg2.alt = 'heart-icon-for-likes';

  const verTodosConversationsA = document.createElement('a');
  verTodosConversationsA.innertext = 'ver todos';
  textContainerDiv.appendChild(conversationNameP);
  textContainerDiv.appendChild(conversationPostP);
  conversationContentDiv.appendChild(conversationImg);
  conversationContentDiv.appendChild(textContainerDiv);

  conversationContainerDiv.appendChild(conversationContentDiv);

  conversationActions.appendChild(conversationImg1);
  conversationActions.appendChild(conversationImg2);

  conversationContainerDiv.appendChild(conversationActions);

  conversationsDiv.appendChild(conversationsH3);
  conversationsDiv.appendChild(conversationContainerDiv);
  conversationsDiv.appendChild(verTodosConversationsA);

  trendingContainerDiv.appendChild(conversationsDiv);

  // ----------------news-------------------------------
  const newsDiv = document.createElement('div');
  const news = document.createElement('h3');
  news.textContent = 'Noticias';

  const newsContainer = document.createElement('div');
  newsContainer.className = 'news-container';

  const newsContent = document.createElement('div');
  newsContent.className = 'news-content';

  const newsText = document.createElement('p');
  newsText.className = 'news-text';
  newsText.innerText = 'LABORATORIA expande sus puertas a Asuncion, Ciudad de Panama, La Paz, Montevideo y San Jose!';

  const newsImg = document.createElement('img');
  newsImg.className = 'news-img';
  newsImg.src = '../img/ED6FEYGGQNFGDM36CZVBK3WALE.webp';
  newsImg.alt = 'message-icon-for-comment';

  const conversationsActions = document.createElement('div');
  conversationsActions.className = 'conversation-actions';

  const messagesIcon = document.createElement('i');
  messagesIcon.className = 'messages-icon';
  messagesIcon.src = '../img/chat-svgrepo-com.svg';
  messagesIcon.alt = 'heart-icon-for-likes';

  const heartIcon = document.createElement('i');
  heartIcon.className = 'heart-icon';
  heartIcon.src = '../img/heart-svgrepo-com.svg';
  heartIcon.alt = 'heart-icon-for-likes';

  const seeAllNews = document.createElement('a');
  seeAllNews.innertext = 'ver todos';
  newsContent.appendChild(newsText);
  newsContent.appendChild(newsImg);

  conversationsActions.appendChild(messagesIcon);
  conversationsActions.appendChild(heartIcon);

  newsContainer.appendChild(newsContent);
  newsContainer.appendChild(conversationsActions);

  newsDiv.appendChild(news);
  newsDiv.appendChild(newsContainer);
  newsDiv.appendChild(seeAllNews);

  trendingContainerDiv.appendChild(newsDiv);

  asideElement.appendChild(trendingContainerDiv);

  flexItemLeftDiv.appendChild(asideElement);

  // main de user post container que va en el flex-item-right
  const mainElement = document.createElement('main');

  // Crear div user-post-container
  const userPostContainerDiv = document.createElement('div');
  userPostContainerDiv.className = 'user-post-container';

  // Crear textarea
  const textareaElement = document.createElement('textarea');
  textareaElement.setAttribute('type', 'input');
  textareaElement.className = 'user-post colorwhite';
  textareaElement.placeholder = 'Crea un post';

  // Crear div user-post-btns-container
  const userPostBtnsContainerDiv = document.createElement('div');
  userPostBtnsContainerDiv.className = 'user-post-btns-container';

  // Crear botón para insertar foto
  const btnInsertPhoto = document.createElement('button');
  btnInsertPhoto.className = 'btn-insert-photo colorlightblue';
  const photoIconImg = document.createElement('img');
  photoIconImg.className = 'photo-icon';
  photoIconImg.src = '../img/camara-icon.svg';
  photoIconImg.alt = 'camera-icon';
  btnInsertPhoto.appendChild(photoIconImg);

  // Crear botón para publicar
  const btnPost = document.createElement('button');
  btnPost.className = 'btn-post colorbackpink';
  btnPost.textContent = 'publicar';
  // --------------------------INICIO---Footer
  const footerFeed = document.createElement('footer');
  footerFeed.className = 'colorgray';
  //  div del footer
  const footerFirstRow = document.createElement('div');
  footerFirstRow.className = 'footer-first-row';
  // Datos del footer
  // Informacion
  const information = document.createElement('p');
  information.innertext = 'Información';
  // Ayuda
  const help = document.createElement('p');
  help.innertext = 'Ayuda';
  // Privacidad
  const privacy = document.createElement('p');
  privacy.innertext = 'Condiciones';
  // Condiciones
  const conditions = document.createElement('p');
  conditions.innertext = 'Condiciones';
  // Privacidad
  const complaint = document.createElement('p');
  complaint.innertext = 'Denuncias';
  //  div del footer-second-row
  const footerSecondRow = document.createElement('div');
  footerSecondRow.className = 'footer-second-row';
  // Español (España)
  const spanish = document.createElement('p');
  spanish.innertext = 'Español (España)';
  // © 2023 LABORATORIA
  const laboratoria = document.createElement('p');
  laboratoria.innertext = '© 2023 LABORATORIA';
  // ------------------------FIN-----Footer

  // Añadir textarea al div user-post-container
  userPostContainerDiv.appendChild(textareaElement);

  // Añadir botones al div user-post-btns-container
  userPostBtnsContainerDiv.appendChild(btnInsertPhoto);
  userPostBtnsContainerDiv.appendChild(btnPost);

  // Añadir div user-post-btns-container al div user-post-container
  userPostContainerDiv.appendChild(userPostBtnsContainerDiv);

  // Añadir div user-post-container al elemento main
  mainElement.appendChild(userPostContainerDiv);

  flexItemRightDiv.appendChild(mainElement);

  centeredMainDiv.appendChild(flexItemLeftDiv);
  centeredMainDiv.appendChild(flexItemRightDiv);

  divFeedPrincipal.appendChild(headerFeed);
  divFeedPrincipal.appendChild(centeredMainDiv);

  divFeedPrincipal.appendChild(footerFeed);
  footerFeed.appendChild(footerFirstRow);
  footerFeed.appendChild(footerSecondRow);

  footerFirstRow.appendChild(information);
  footerFirstRow.appendChild(help);
  footerFirstRow.appendChild(privacy);
  footerFirstRow.appendChild(conditions);
  footerFirstRow.appendChild(complaint);

  footerSecondRow.appendChild(spanish);
  footerSecondRow.appendChild(laboratoria);
  return divFeedPrincipal;
};
