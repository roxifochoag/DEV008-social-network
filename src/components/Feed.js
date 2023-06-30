export const Feed = () => {


    //encerrar todo el feed incluyendo header
    const divFeedPrincipal = document.createElement('div')

    // ------------------------------------------------
    // Inicio del header
    // declaración de la clase del header
    const headerFeed = document.createElement('header');
    headerFeed.className = 'colorbackpink';
    // logo de warmi
    const logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = '../img/icon-logo.png';
    logo.alt = 'logo';
    // Logo horizontal
    const logohorizontal = document.createElement('img');
    logohorizontal.className = 'logo-horizontal';
    logohorizontal.src = '../img/logo-feed.png';
    logohorizontal.alt = 'logo';
    // Estructura del boton
    // Boton 
    const IconHideMenu = document.createElement('button');
    IconHideMenu.className = 'icon-hide-menu';

    const IconMenuCelphone = document.createElement('img');
    IconMenuCelphone.src = '../img/icon-menu-celphone.svg';
    //Barra de búsqueda 
    const InputSearchBar = document.createElement('input');
    InputSearchBar.setAttribute("type", "search");
    InputSearchBar.className = 'input-search-bar';
    InputSearchBar.placeholder = 'Buscar';
    // User image
    const UserImage = document.createElement('div');
    UserImage.className = 'user-image colorlightblue'
    // Fin del header

    headerFeed.appendChild(logo);
    headerFeed.appendChild(logohorizontal);
    headerFeed.appendChild(IconHideMenu);
    IconHideMenu.appendChild(IconMenuCelphone);
    headerFeed.appendChild(InputSearchBar);
    headerFeed.appendChild(UserImage);

    // ------------------------------------------------


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
    const hashtagsDiv = document.createElement('div');
    const hashtagsH3 = document.createElement('h3');
    hashtagsH3.textContent = 'Hashtags';
    const hashtagTemplateP = document.createElement('p');
    hashtagTemplateP.className = 'hashtag-template';
    hashtagTemplateP.textContent = '#mercadillolatino';
    const verTodosHashtagsA = document.createElement('a');
    verTodosHashtagsA.textContent = 'ver todos';
    hashtagsDiv.appendChild(hashtagsH3);
    hashtagsDiv.appendChild(hashtagTemplateP);
    hashtagsDiv.appendChild(verTodosHashtagsA);
    trendingContainerDiv.appendChild(hashtagsDiv);

    // Crear div para grupos
    const gruposDiv = document.createElement('div');
    const gruposH3 = document.createElement('h3');
    gruposH3.textContent = 'Grupos';
    const groupContainerDiv = document.createElement('div');
    groupContainerDiv.className = 'group-container';
    const groupImg = document.createElement('img');
    groupImg.className = 'group-img colorlightblue';
    const groupTitleP = document.createElement('p');
    groupTitleP.className = 'group-title';
    groupTitleP.textContent = 'ingles basico para principiantes';
    groupContainerDiv.appendChild(groupImg);
    groupContainerDiv.appendChild(groupTitleP);
    const verTodosGruposA = document.createElement('a');
    verTodosGruposA.textContent = 'ver todos';
    gruposDiv.appendChild(gruposH3);
    gruposDiv.appendChild(groupContainerDiv);
    gruposDiv.appendChild(verTodosGruposA);
    trendingContainerDiv.appendChild(gruposDiv);

    // Crear div para conversaciones
    const conversacionesDiv = document.createElement('div');

    const conversacionesH3 = document.createElement('h3');
    conversacionesH3.textContent = 'Conversaciones';

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
    conversationImg1.alt = "message-icon-for-comment"
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

    conversacionesDiv.appendChild(conversacionesH3);
    conversacionesDiv.appendChild(conversationContainerDiv);
    conversacionesDiv.appendChild(verTodosConversationsA)

    trendingContainerDiv.appendChild(conversacionesDiv);

    // ----------------news-------------------------------

    const newsDiv = document.createElement('div');
    const news = document.createElement('h3');
    news.textContent = 'Noticias';

    const NewsContainer = document.createElement('div');
    NewsContainer.className = 'news-container';

    const NewsContent = document.createElement('div')
    NewsContent.className = 'news-content';

    const NewsText = document.createElement('p');
    NewsText.className = 'news-text';
    NewsText.innerText = 'LABORATORIA expande sus puertas a Asuncion, Ciudad de Panama, La Paz, Montevideo y San Jose!';

    const NewsImg = document.createElement('img');
    NewsImg.className = 'news-img';
    NewsImg.src = '../img/ED6FEYGGQNFGDM36CZVBK3WALE.webp';
    NewsImg.alt = 'message-icon-for-comment';

    const ConversationActions = document.createElement('div');
    ConversationActions.className = 'conversation-actions';

    const MessagesIcon = document.createElement('i');
    MessagesIcon.className = 'messages-icon';
    MessagesIcon.src = '../img/chat-svgrepo-com.svg';
    MessagesIcon.alt = 'heart-icon-for-likes';

    const HeartIcon = document.createElement('i');
    HeartIcon.className = 'heart-icon';
    HeartIcon.src = '../img/heart-svgrepo-com.svg';
    HeartIcon.alt = 'heart-icon-for-likes';

    const VertodosNews = document.createElement('a');
    VertodosNews.innertext = 'ver todos';


    NewsContent.appendChild(NewsText);
    NewsContent.appendChild(NewsImg);

    conversationActions.appendChild(MessagesIcon);
    conversationActions.appendChild(HeartIcon);

    NewsContainer.appendChild(NewsContent);
    NewsContainer.appendChild(conversationActions)

    newsDiv.appendChild(news);
    newsDiv.appendChild(NewsContainer)
    newsDiv.appendChild(VertodosNews);

    trendingContainerDiv.appendChild(newsDiv);

    asideElement.appendChild(trendingContainerDiv);

    flexItemLeftDiv.appendChild(asideElement);

    ////main de user post container que va en el flex-item-right

    const mainElement = document.createElement('main');

    // Crear div user-post-container
    const userPostContainerDiv = document.createElement('div');
    userPostContainerDiv.className = 'user-post-container';

    // Crear textarea
    const textareaElement = document.createElement('textarea');
    textareaElement.setAttribute("type", "input");
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

    return divFeedPrincipal;
}
