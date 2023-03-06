/* eslint-disable import/extensions */
import ImageFactory from './ImageFactory.js';
import VideoFactory from './VideoFactory.js';

// La classe MediaFactory permet de vérifier si l'élément sélectionné est une image ou une vidéo
// et de créer l'objet correspondant en utilisant la classe ImageFactory ou VideoFactory.
export default function MediaFactory() {
  // La méthode renderMedia(element) prend un élément en paramètre et vérifie s'il possède
  // la propriété "image" ou "video". En fonction de la propriété trouvée,
  // l'objet factory sera créé en utilisant la classe ImageFactory ou VideoFactory.
  // Enfin, la méthode renvoie l'objet factory créé en appelant la méthode
  // createHTML(element) de la classe ImageFactory ou VideoFactory.
  function renderMedia(element) {
    let factory = null;
    if ('image' in element) {
      factory = new ImageFactory();
    } else if ('video' in element) {
      factory = new VideoFactory();
    }
    return factory.createHTML(element);
  }
  return { renderMedia };
}
