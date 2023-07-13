import {
  getDoc, updateDoc, arrayUnion, doc, arrayRemove, onSnapshot,
} from 'firebase/firestore';
import {
  savePost, showPosts, deletePost, getUserByUserID, listenPost,
  /*
  updatePost,
  */
} from '../firebase/firebase.js';
import { auth, db } from '../firebase/config.js';


export const Feed = () => {
  listenPost((post) => {

  });
  // ---------------------------HEAD----------------------

  const headFeed = document.createElement('head');
  const titleHeadFeed = document.createElement('title');
  titleHeadFeed.innerText = 'WarmiFeed';
  headFeed.appendChild(titleHeadFeed);

  const divFeedPrincipal = document.createElement('div');
  divFeedPrincipal.className = 'feed-container colorwhite';

  // ---------------------------HEADER---------------------

  const headerFeed = document.createElement('header');
  headerFeed.className = 'colorbackpink';
  divFeedPrincipal.appendChild(headerFeed);

  const headerContainer = document.createElement('div');
  headerContainer.className = 'header-container';
  headerFeed.appendChild(headerContainer);

  const brand = document.createElement('img');
  brand.className = 'logo';
  brand.src = '../img/icon-logo.png';
  brand.alt = 'logo';

  const brandHorizontal = document.createElement('img');
  brandHorizontal.className = 'logo-horizontal';
  brandHorizontal.src = '../img/logo-feed.png';
  brandHorizontal.alt = 'logo';

  const iconHideMenu = document.createElement('button');
  iconHideMenu.className = 'icon-hide-menu';

  const iconMenuCelphone = document.createElement('img');
  iconMenuCelphone.src = '../img/icon-menu-celphone.svg';

  const inputSearchBar = document.createElement('input');
  inputSearchBar.setAttribute('type', 'search');
  inputSearchBar.className = 'input-search-bar';
  inputSearchBar.placeholder = 'Buscar';

  const userNameHed = document.createElement('p');
  userNameHed.className = 'user-name-header';
  const pictureProfile = document.createElement('img');
  pictureProfile.className = 'user-image colorlightblue';

  const userLocalStorage = JSON.parse(localStorage.getItem('userCredentials'));
  getUserByUserID(userLocalStorage.userID).then((user) => {
    userNameHed.innerText = user.username;
    pictureProfile.src = user.picture;
    console.log(user.picture);
  });

  headerContainer.appendChild(brand);
  headerContainer.appendChild(brandHorizontal);
  headerContainer.appendChild(iconHideMenu);
  iconHideMenu.appendChild(iconMenuCelphone);
  headerContainer.appendChild(inputSearchBar);
  headerContainer.appendChild(userNameHed);
  headerContainer.appendChild(pictureProfile);

  // -------------------MAIN(whole content)---------------

  const centeredMainDiv = document.createElement('div');
  centeredMainDiv.className = 'centered-main';
  divFeedPrincipal.appendChild(centeredMainDiv);

  const flexItemLeftDiv = document.createElement('div');
  flexItemLeftDiv.className = 'flex-item-left';

  const flexItemRightDiv = document.createElement('div');
  flexItemRightDiv.className = 'flex-item-right';

  // ---------------------ASIDE(left)--------------------
  const asideElement = document.createElement('aside');

  const trendingContainerDiv = document.createElement('div');
  trendingContainerDiv.className = 'trending-container';

  const trendyTitleDiv = document.createElement('div');
  const trendyTitleH2 = document.createElement('h2');
  trendyTitleH2.className = 'trendy-title colorbackpink';
  trendyTitleH2.textContent = 'Tendencias';
  trendyTitleDiv.appendChild(trendyTitleH2);
  trendingContainerDiv.appendChild(trendyTitleDiv);

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
  conversationActions.className = 'conversation-actions';

  const conversationImg1 = document.createElement('img');
  conversationImg1.className = 'messages-icon';
  conversationImg1.src = '/img/chat-square-dots-fill.svg';
  conversationImg1.alt = 'message-icon-for-comment';

  const conversationImg2 = document.createElement('img');
  conversationImg2.className = 'heart-icon';
  conversationImg2.src = '/img/heart-fill-white.svg';
  conversationImg2.alt = 'heart-icon-for-likes';

  const seeAllConversationsA = document.createElement('a');
  seeAllConversationsA.textContent = 'ver todos';

  conversationsDiv.appendChild(conversationsH3);
  conversationsDiv.appendChild(conversationContainerDiv);
  conversationsDiv.appendChild(seeAllConversationsA);

  conversationContainerDiv.appendChild(conversationContentDiv);
  conversationContentDiv.appendChild(conversationImg);
  conversationContentDiv.appendChild(textContainerDiv);
  textContainerDiv.appendChild(conversationNameP);
  textContainerDiv.appendChild(conversationPostP);

  conversationContainerDiv.appendChild(conversationActions);
  conversationActions.appendChild(conversationImg1);
  conversationActions.appendChild(conversationImg2);

  trendingContainerDiv.appendChild(conversationsDiv);

  const newsDiv = document.createElement('div');
  const news = document.createElement('h3');
  news.textContent = 'Noticias';

  const newsContainer = document.createElement('div');
  newsContainer.className = 'news-container';

  const newsContent = document.createElement('div');
  newsContent.className = 'news-content';

  const newsText = document.createElement('p');
  newsText.className = 'news-text text-plus';
  newsText.innerText = 'LABORATORIA expande sus puertas a Asuncion, Ciudad de Panama, La Paz, Montevideo y San Jose!';

  const newsImg = document.createElement('img');
  newsImg.className = 'news-img';
  newsImg.src = '../img/ED6FEYGGQNFGDM36CZVBK3WALE.webp';
  newsImg.alt = 'message-icon-for-comment';

  const conversationsActions = document.createElement('div');
  conversationsActions.className = 'conversation-actions';

  const messagesIcon = document.createElement('img');
  messagesIcon.className = 'messages-icon';
  messagesIcon.src = '/img/chat-square-dots-fill.svg';
  messagesIcon.alt = 'heart-icon-for-likes';

  const heartIcon = document.createElement('img');
  heartIcon.className = 'heart-icon';
  heartIcon.src = '/img/heart-fill-white.svg';
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

  // ------------------USER SECTION (right)---------------------
  const mainElement = document.createElement('main');

  const userPostContainerDiv = document.createElement('form');
  userPostContainerDiv.className = 'user-post-container';

  const textareaElement = document.createElement('textarea');
  textareaElement.className = 'user-post colorwhite';
  textareaElement.id = 'db-post-content';
  textareaElement.placeholder = 'Crea un post';
  textareaElement.required = true;

  const userPostBtnsContainerDiv = document.createElement('div');
  userPostBtnsContainerDiv.className = 'user-post-btns-conatiner';

  const btnInsertPhoto = document.createElement('button');
  btnInsertPhoto.className = 'btn-insert-photo colorlightblue';
  btnInsertPhoto.type = 'button';
  const photoIconImg = document.createElement('img');
  photoIconImg.className = 'photo-icon';
  photoIconImg.src = '../img/camara-icon.svg';
  photoIconImg.alt = 'camera-icon';
  btnInsertPhoto.appendChild(photoIconImg);

  const btnPost = document.createElement('button');
  btnPost.className = 'btn-post colorbackpink';
  btnPost.textContent = 'publicar';
  btnPost.type = 'submit';

  const feedContainer = document.createElement('div');
  feedContainer.className = 'timeline-container';

  // --------------------------INICIO---Footer
  const footerFeed = document.createElement('footer');
  footerFeed.className = 'colorgray';
  divFeedPrincipal.appendChild(footerFeed);

  const footerFirstRow = document.createElement('div');
  footerFirstRow.className = 'footer-first-row';
  footerFeed.appendChild(footerFirstRow);

  const footerSecondRow = document.createElement('div');
  footerSecondRow.className = 'footer-second-row';
  footerFeed.appendChild(footerSecondRow);

  const information = document.createElement('p');
  information.textContent = 'Información';

  const help = document.createElement('p');
  help.textContent = 'Ayuda';

  const privacy = document.createElement('p');
  privacy.textContent = 'Privacidad';

  const conditions = document.createElement('p');
  conditions.textContent = 'Condiciones';

  const complaint = document.createElement('p');
  complaint.textContent = 'Denuncias';

  footerFirstRow.appendChild(information);
  footerFirstRow.appendChild(help);
  footerFirstRow.appendChild(privacy);
  footerFirstRow.appendChild(conditions);
  footerFirstRow.appendChild(complaint);

  const spanish = document.createElement('p');

  spanish.textContent = 'Español (España)';
  const laboratoria = document.createElement('p');
  laboratoria.textContent = '© 2023 LABORATORIA';

  footerSecondRow.appendChild(spanish);
  footerSecondRow.appendChild(laboratoria);

  userPostContainerDiv.appendChild(textareaElement);

  userPostBtnsContainerDiv.appendChild(btnInsertPhoto);
  userPostBtnsContainerDiv.appendChild(btnPost);
  userPostContainerDiv.appendChild(userPostBtnsContainerDiv);

  mainElement.appendChild(userPostContainerDiv);
  mainElement.appendChild(feedContainer);

  flexItemRightDiv.appendChild(mainElement);
  centeredMainDiv.appendChild(flexItemLeftDiv);
  centeredMainDiv.appendChild(flexItemRightDiv);

  // --------------------------------------------------------------
  // INICIO DE FUNCIONES A BOTONES E INTERACCIONES EN FEED
  // --------------------------------------------------------------

  /*
|-----------------------------------------|
|           Create a post  (visual)       |
|-----------------------------------------|
  */
  async function addPostToFeed(container, postRef, post) {
    const author = await getDataAuthor(post.author);

    const userPublishedPost = document.createElement('div');
    userPublishedPost.className = 'user-published-post';

    const userPublishedPostDiv = document.createElement('div');
    userPublishedPostDiv.className = 'user-published-post-div';
    userPublishedPost.appendChild(userPublishedPostDiv);

    const userPublishedPostContent = document.createElement('div');
    userPublishedPostContent.className = 'user-published-post-content';
    userPublishedPostDiv.appendChild(userPublishedPostContent);

    const conversationImg3 = document.createElement('img');
    conversationImg3.className = 'conversation-img colorlightblue';
    conversationImg3.src = author.picture;
    userPublishedPostContent.appendChild(conversationImg3);

    const userPublishedPostTextContent = document.createElement('div');
    userPublishedPostTextContent.className = 'user-published-post-text-content';
    userPublishedPostContent.appendChild(userPublishedPostTextContent);

    const textContentUpperRow = document.createElement('div');
    textContentUpperRow.className = 'text-content-upper-row';
    userPublishedPostTextContent.appendChild(textContentUpperRow);

    const userPublishedPostTitle = document.createElement('p');
    userPublishedPostTitle.className = 'user-published-post-title';
    userPublishedPostTitle.textContent = author.username;
    textContentUpperRow.appendChild(userPublishedPostTitle);

    const userPublishedPostEdit = document.createElement('p');
    userPublishedPostEdit.className = 'user-published-post-edit';
    userPublishedPostEdit.textContent = '...';
    textContentUpperRow.appendChild(userPublishedPostEdit);
    //
    const PostEditButtons = document.createElement('ul');
    PostEditButtons.className = 'edit-post-option-container colorwhite';

    const editButton = document.createElement('li');
    editButton.className = 'edit-post-option';
    editButton.textContent = 'editar';

    const eraseButton = document.createElement('li');
    eraseButton.className = 'edit-post-option two';
    eraseButton.textContent = 'eliminar';

    const reportButton = document.createElement('li');
    reportButton.className = 'edit-post-option three';
    reportButton.textContent = 'Reportar';
    /*
|--------------------------------------------------------|
|      Delete and edit buttons only por user author      |
|--------------------------------------------------------|
    */
    if (auth.currentUser.email === author.email) {
      userPublishedPostEdit.appendChild(PostEditButtons);
      PostEditButtons.appendChild(editButton);
      PostEditButtons.appendChild(eraseButton);
    } else {
      userPublishedPostEdit.appendChild(PostEditButtons);
      PostEditButtons.appendChild(reportButton);
      reportButton.addEventListener('click', async () => {
        // eslint-disable-next-line no-alert
        (window.confirm('Reporte enviado, Gracias por ayudarnos a ser una mejor comunidad'));
      });
    }
    /*
|-----------------------------------------|
|            Delete posts button          |
|-----------------------------------------|
    */
    eraseButton.addEventListener('click', async () => {
      function alerta() {
        // eslint-disable-next-line no-alert
        if (window.confirm('Confirme el borrado del Post')) {
          deletePost(postRef.id);
          userPublishedPost.parentElement.removeChild(userPublishedPost);
          // .then(() => {
          console.log('Post eliminado');
          //     }).catch((error) => {
          //          const errorCode = error.code;
          //          const errorMessage = error.Message;
          //          console.log(errorCode, errorMessage);
          //      });
        }
      }
      alerta();
    });

        /*
|-----------------------------------------|
|            Edit posts button          |
|-----------------------------------------|
    */
editButton.addEventListener('click', async () => {
  
});



    const userPublishedPostText = document.createElement('p');
    userPublishedPostText.className = 'user-published-post-text';
    userPublishedPostText.textContent = post.text;
    userPublishedPostTextContent.appendChild(userPublishedPostText);

    const userPublishedPostActions = document.createElement('div');
    userPublishedPostActions.className = 'user-published-post-actions';
    userPublishedPostDiv.appendChild(userPublishedPostActions);

    const messagesIcon3 = document.createElement('img');
    messagesIcon3.className = 'messages-icon';
    messagesIcon3.src = '/img/chat-square-dots-fill.svg';
    messagesIcon3.alt = 'message-icon-for-comment';
    userPublishedPostActions.appendChild(messagesIcon3);

    const heartIcon3 = document.createElement('img');
    heartIcon3.className = 'heart-icon';
    heartIcon3.src = '/img/heart-fill-white.svg';
    heartIcon3.alt = 'heart-icon-for-likes';
    userPublishedPostActions.appendChild(heartIcon3);

    const likesCounter = document.createElement('span');
    likesCounter.className = 'likes-counter';
    likesCounter.innerText = ` ${post.liked_by.length} `;
    userPublishedPostActions.appendChild(likesCounter);

    heartIcon3.addEventListener('click', async () => {
      const freshPost = await getDataAuthor(postRef);
      const heartIcon = await updateLikePost(postRef, freshPost);
      heartIcon3.src = heartIcon;
    });

    // Necesario para recibir actualizaciones automáticamente desde firebase, cuando el post cambie
    onSnapshot(postRef, (freshPostDocument) => {
      const freshPost = freshPostDocument.data();
      likesCounter.innerText = ` ${freshPost.liked_by.length} `;
      if (freshPost.liked_by.length === 0) {
        likesCounter.innerText = '';
      }
    });

    container.prepend(userPublishedPost);
  }

  /*
|-----------------------------------------|
|   Show posts from firestore into feed   |
|-----------------------------------------|
  */
  window.addEventListener('DOMContentLoaded', async () => {
    const TimelinePosts = await showPosts();

    TimelinePosts.forEach((postDocument) => {
      const post = postDocument.data();
      addPostToFeed(feedContainer, postDocument.ref, post);
    });
  });

  /*
|-----------------------------------------|
|   Save new post from user to firestore  |
|-----------------------------------------|
  */
  userPostContainerDiv.addEventListener('submit', async (e) => {
    e.preventDefault();
    const postRef = await savePost(textareaElement.value);
    const postDocument = await getDataAuthor(postRef);
    await addPostToFeed(feedContainer, postRef, postDocument);

    userPostContainerDiv.reset();
  });
  return divFeedPrincipal;
};
