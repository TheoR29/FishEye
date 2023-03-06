/* eslint-disable import/extensions */
import GalleryFactory from '../Factory/GalleryFactory.js';

export default class DropDownMenu {
  // fonction qui gère l'affichage et le tri des medias
  static dropDown(data) {
    const arrowOpen = document.getElementsByClassName('sort-btn');
    const arrowClose = document.getElementsByClassName('arrow-up-close');
    const hiddenSort = document.getElementsByClassName('hidden-sort');

    // si le bouton d'ouverture est présent
    if (arrowOpen) {
      // ajouter un événement au clic sur le bouton d'ouverture
      arrowOpen[0].addEventListener('click', () => {
        hiddenSort[0].style.display = 'block';
      });

      // trier les medias
      DropDownMenu.sortMedias(data);
    }
    // si le bouton de fermeture est présent
    if (arrowClose) {
      // ajouter un événement au clic sur le bouton de fermeture
      arrowClose[0].addEventListener('click', () => {
        hiddenSort[0].style.display = 'none';
      });
    }
  }

  // fonction qui tri les médias en fonction du bouton sélectionné
  static sortMedias(data) {
    let mediaArraySort = [];
    const { media } = data;
    const btnSort = document.querySelector('.sort-btn');
    const hiddenSort = document.getElementsByClassName('hidden-sort');
    const sortBtn = Array.from(document.getElementsByClassName('sort'));

    sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
      hiddenSort[0].style.display = 'none';
      // trier par popularité
      if (index === 0) {
        btnSort.innerHTML = 'Popularité';

        mediaArraySort = media.sort((a, b) => b.likes - a.likes);
      }
      // trier par date
      if (index === 1) {
        btnSort.innerHTML = 'Date';

        mediaArraySort = media.sort(
          (a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf(),
        );
      }
      // trier par titre
      if (index === 2) {
        btnSort.innerHTML = 'Titre';

        mediaArraySort = media.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          } if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
      }
      // afficher les medias triés
      DropDownMenu.displaySortMedia(mediaArraySort);
    }));
  }

  // fonction qui affiche les médias triés
  static displaySortMedia(mediaArraySort) {
    // supprimer tous les médias de la page
    document.getElementById('ph-works').innerHTML = '';
    // afficher les médias triés à l'aide d'une factory
    new GalleryFactory().builder(mediaArraySort);
  }
}
