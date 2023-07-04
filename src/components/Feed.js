export const Feed = () => {
  // ---------------------------HEAD----------------------
  // Titulo del head
  const headFeed = document.createElement('head');
  const titleHeadFeed = document.createElement('title');
  titleHeadFeed.innerText = 'WarmiFeed';
  headFeed.appendChild(titleHeadFeed);

  // Encerrar todo el feed incluyendo header
  const divFeedPrincipal = document.createElement('div');
  divFeedPrincipal.className = 'feed-container colorwhite';

  // ---------------------------HEADER---------------------
  // Inicio del header
  // declaración de la clase del header
  const headerFeed = document.createElement('header');
  headerFeed.className = 'colorbackpink';
  divFeedPrincipal.appendChild(headerFeed);

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
  divFeedPrincipal.appendChild(centeredMainDiv);
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
  groupTitleP.textContent = 'inglés básico para principiantes';
  groupContainerDiv.appendChild(groupImg);
  groupContainerDiv.appendChild(groupTitleP);
  const seeAllGroupsA = document.createElement('a');
  seeAllGroupsA.textContent = 'ver todos';
  groupsDiv.appendChild(groupsH3);
  groupsDiv.appendChild(groupContainerDiv);
  groupsDiv.appendChild(seeAllGroupsA);
  trendingContainerDiv.appendChild(groupsDiv);
  // --------------------------- conversations ---------------------------
  // Crear div para conversaciones
  const conversationsDiv = document.createElement('div');

  const conversationsH3 = document.createElement('h3');
  conversationsH3.textContent = 'Conversaciones';

  const conversationContainerDiv = document.createElement('div');
  conversationContainerDiv.className = 'conversation-container';

  // Mejorar el signo de conversaciones
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
  conversationActions.className = 'conversation-actions';

  const conversationImg1 = document.createElement('img');
  conversationImg1.className = 'messages-icon';
  conversationImg1.src = '../img/chat-svgrepo-com.svg';
  conversationImg1.alt = 'message-icon-for-comment';

  const conversationImg2 = document.createElement('img');
  conversationImg2.className = 'heart-icon';
  conversationImg2.src = '../img/heart-svgrepo-com.svg';
  conversationImg2.alt = 'heart-icon-for-likes';

  const seeAllConversationsA = document.createElement('a');
  seeAllConversationsA.textContent = 'ver todos';

  conversationsDiv.appendChild(conversationsH3);
  conversationsDiv.appendChild(conversationContainerDiv);
  conversationsDiv.appendChild(seeAllConversationsA);
  // dentro de primer elemento
  conversationContainerDiv.appendChild(conversationContentDiv);
  conversationContentDiv.appendChild(conversationImg);
  conversationContentDiv.appendChild(textContainerDiv);
  textContainerDiv.appendChild(conversationNameP);
  textContainerDiv.appendChild(conversationPostP);
  // dentro de segundo element
  conversationContainerDiv.appendChild(conversationActions);
  conversationActions.appendChild(conversationImg1);
  conversationActions.appendChild(conversationImg2);

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

  const messagesIcon = document.createElement('img');
  messagesIcon.className = 'messages-icon';
  messagesIcon.src = '../img/chat-svgrepo-com.svg';
  messagesIcon.alt = 'heart-icon-for-likes';

  const heartIcon = document.createElement('img');
  heartIcon.className = 'heart-icon';
  heartIcon.src = '../img/heart-svgrepo-com.svg';
  heartIcon.alt = 'heart-icon-for-likes';
  newsContent.appendChild(newsText);
  newsContent.appendChild(newsImg);

  const seeAllNews = document.createElement('a');
  seeAllNews.innerText = 'ver todos';

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

  // Post
  // 1er post publicado
  const userPublishedPost = document.createElement('div');
  userPublishedPost.className = 'user-published-post';

  const userPublishedPostContent = document.createElement('div');
  userPublishedPostContent.className = 'user-published-post-content';
  userPublishedPost.appendChild(userPublishedPostContent);

  const conversationImg3 = document.createElement('img');
  conversationImg3.className = 'conversation-img';
  conversationImg3.src = 'img/istockphoto-1323400501-612x612.jpg';
  userPublishedPost.appendChild(conversationImg3);

  const userPublishedPostTextContent = document.createElement('div');
  userPublishedPostTextContent.className = 'user-published-post-text-content';
  userPublishedPost.appendChild(userPublishedPostTextContent);

  const userPublishedPostTitle = document.createElement('p');
  userPublishedPostTitle.className = 'user-published-post-title';
  userPublishedPostTitle.textContent = 'Amanda Osorio';
  userPublishedPostTextContent.appendChild(userPublishedPostTitle);

  const userPublishedPostText = document.createElement('p');
  userPublishedPostText.className = 'user-published-post-text';
  userPublishedPostText.textContent = 'Estaran organizando clases de Francés gratuitas: Nivel A1-A2 Martes y Viernes de 19:00 - 21:00 - 01/Set en las instalaciones de Miami-Dade College para las que reciden en   Miami!';
  userPublishedPostTextContent.appendChild(userPublishedPostText);

  const userPublishedPostActions = document.createElement('div');
  userPublishedPostActions.className = 'user-published-post-actions';
  userPublishedPost.appendChild(userPublishedPostActions);

  const messagesIcon3 = document.createElement('img');
  messagesIcon3.className = 'messages-icon';
  messagesIcon3.src = 'img/chat-svgrepo-com.svg';
  messagesIcon3.alt = 'message-icon-for-comment';
  userPublishedPostActions.appendChild(messagesIcon3);

  const heartIcon3 = document.createElement('img');
  heartIcon3.className = 'heart-icon';
  heartIcon3.src = 'img/heart-svgrepo-com.svg';
  heartIcon3.alt = 'heart-icon-for-likes';
  userPublishedPostActions.appendChild(heartIcon3);

  // --------------------------INICIO---Footer
  const footerFeed = document.createElement('footer');
  footerFeed.className = 'colorgray';
  divFeedPrincipal.appendChild(footerFeed);

  //  div del footer
  const footerFirstRow = document.createElement('div');
  footerFirstRow.className = 'footer-first-row';
  footerFeed.appendChild(footerFirstRow);

  //  div del footer-second-row
  const footerSecondRow = document.createElement('div');
  footerSecondRow.className = 'footer-second-row';
  footerFeed.appendChild(footerSecondRow);

  // Datos del footer
  // Informacion
  const information = document.createElement('p');
  information.textContent = 'Información';
  // Ayuda
  const help = document.createElement('p');
  help.textContent = 'Ayuda';
  // Privacidad
  const privacy = document.createElement('p');
  privacy.textContent = 'Privacidad';
  // Condiciones
  const conditions = document.createElement('p');
  conditions.textContent = 'Condiciones';
  // Privacidad
  const complaint = document.createElement('p');
  complaint.textContent = 'Denuncias';

  footerFirstRow.appendChild(information);
  footerFirstRow.appendChild(help);
  footerFirstRow.appendChild(privacy);
  footerFirstRow.appendChild(conditions);
  footerFirstRow.appendChild(complaint);
  // --------------------------------------------------------------
  // Español (España)
  const spanish = document.createElement('p');

  spanish.textContent = 'Español (España)';
  // © 2023 LABORATORIA
  const laboratoria = document.createElement('p');
  laboratoria.textContent = '© 2023 LABORATORIA';

  footerSecondRow.appendChild(spanish);
  footerSecondRow.appendChild(laboratoria);
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
  mainElement.appendChild(userPublishedPost);

  flexItemRightDiv.appendChild(mainElement);
  centeredMainDiv.appendChild(flexItemLeftDiv);
  centeredMainDiv.appendChild(flexItemRightDiv);

  return divFeedPrincipal;
};