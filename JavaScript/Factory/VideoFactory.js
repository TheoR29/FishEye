export default function VideoFactory() {
  function createHTML(element) {
    // Créer un élément video
    const eltVideo = document.createElement('video');
    // Ajouter l'attribut 'controls' pour afficher les boutons de contrôle de la vidéo
    eltVideo.setAttribute('controls', 'controls');
    // Ajouter l'attribut 'src' pour charger la source de la vidéo
    eltVideo.setAttribute('src', element.video);
    // Ajouter l'attribut 'role' pour améliorer l'accessibilité de l'élément vidéo
    eltVideo.setAttribute('role', 'button');
    eltVideo.setAttribute('tabindex', '0');
    eltVideo.setAttribute('alt', element.alt);

    // Ajouter la classe 'ph-media' pour styliser l'apparence de l'élément vidéo
    eltVideo.className = 'ph-media';

    return eltVideo;
  }
  return { createHTML };
}
