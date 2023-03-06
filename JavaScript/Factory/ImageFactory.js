export default function ImageFactory() {
  // Créer un élément img avec les attributs src, alt et role
  function createHTML(element) {
    const eltImage = document.createElement('img');
    eltImage.setAttribute('src', element.image);
    eltImage.setAttribute('alt', element.alt);
    eltImage.setAttribute('role', 'button');
    eltImage.setAttribute('tabindex', '0');
    eltImage.className = 'ph-media';

    return eltImage;
  }
  return { createHTML };
}
