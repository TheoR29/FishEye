/* eslint-disable import/extensions */
import MediaFactory from './MediaFactory.js';
import Lightbox from '../photographers/LightBox.js';

export default class GalleryFactory {
  constructor() {
    this.totalLike = 0; // Initialise le total de likes à 0
  }

  // Construit la galerie avec les différents médias et la lightbox
  builder(dataMedia) {
    const id = window.location.search.split('id=')[1];
    const mediaFactory = new MediaFactory();
    const currentMedia = []; // Initialise un tableau pour stocker les médias actuels
    const currentMediaName = []; // Initialise un tableau pour stocker les noms des médias actuels

    dataMedia.forEach((element) => {
      // Si l'id correspond à l'identifiant du photographe, on ajoute l'élément à la galerie
      if (parseInt(id, 10) === element.photographerId) {
        const sectionPhWorks = document.getElementById('ph-works');
        const articlePhWork = document.createElement('article');
        const mediaHTML = mediaFactory.renderMedia(element);
        const workTemplate = `
                <a title=${element.title}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.title}</h2>
                    <div class='ph-elt-like'>
                    <span class="ph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                      <em class="far fa-heart heart-btn btn-like" aria-label='likes' role="button" data-value="${element.likes}" tabindex="0"></em>
                    </div>
                </div>
                `;
        articlePhWork.innerHTML = workTemplate;
        sectionPhWorks.appendChild(articlePhWork);
        articlePhWork.classList.add('ph-work-elt');
        this.totalLike += parseInt(element.likes, 10); // Incrémente le total de likes
        currentMedia.push(mediaHTML.outerHTML); // Ajoute l'élément HTML du média actuel au tableau
        currentMediaName.push(element.title); // Ajoute le titre du média actuel au tableau
        (new Lightbox())
        // Initialise la lightbox avec les médias actuels et leurs titres
          .init(currentMedia, currentMediaName);
      }
    });
    return this;
  }
}
