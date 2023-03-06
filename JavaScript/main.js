/* eslint-disable import/extensions */

import ApiFishEye from './api/ApiFishEye.js'; // API

import HomePageBuilder from './home/HomePageBuilder.js'; // Page d'acceuil

// Pages des photographes
import PhotographerProfil from './photographers/PhotographerProfil.js';
import DropDownMenu from './photographers/DropDownSort.js';
import MediaBuilder from './photographers/MediaBuilder.js';

// Cette fonction est appelée immédiatement après sa définition
(function appDispatch() {
  // Une instance de l'objet ApiFishEye est créée et la méthode getDataFishEye
  // est appelée pour récupérer des données
  new ApiFishEye().getDataFishEye().then((data) => {
    // Si la page actuelle est photographers.html
    if (window.location.pathname.includes('/photographers.html')) {
      // La fonction displayPhotographerProfil de l'objet PhotographerProfil est appelée
      // pour afficher le profil du photographe
      new PhotographerProfil().displayPhotographerProfil(data);
      // La fonction dropDown de l'objet DropDownMenu est appelée pour afficher le menu déroulant
      DropDownMenu.dropDown(data);

      // La fonction photographersMedias de l'objet MediaBuilder est appelée pour afficher
      // la galerie de photos et la boîte de likes
      new MediaBuilder().photographersMedias(data);
      return;
    }
    // Sinon, sur la page d'accueil
    // La fonction displayPhotographers de l'objet HomePageBuilder est appelée pour afficher
    // la liste des photographes
    new HomePageBuilder().displayPhotographers(data);
  }).catch(() => {
    // En cas d'erreur, le message d'erreur est affiché dans la console
    console.error('Impossible de charger ApiFishEye ');
  });
}());
