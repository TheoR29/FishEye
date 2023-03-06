export default class LightBox {
  constructor() {
    this.currentIndex = 0;
  }

  init(currentMedia, currentMediaName) {
    // Sélectionne tous les éléments avec la classe 'ph-media' et les stocke dans un tableau

    // Appelle la méthode 'previous' pour retourner au média précédent
    this.previous(document.querySelector('.left-arrow-lightbox'), currentMedia, currentMediaName);

    // Appelle la méthode 'next' pour aller au média suivant lorsqu'on clique sur la flèche droite
    this.next(document.querySelector('.right-arrow-lightbox'), currentMedia, currentMediaName);

    // Appelle la méthode 'close' pour fermer la lightbox lorsqu'on clique sur le bouton 'X'
    this.close();

    // Appelle la méthode 'keyboard' pour permettre la navigation à l'aide des touches du clavier
    this.keyboard(currentMedia, currentMediaName);

    return this;
  }

  previous(elt, media, name) {
    // Ajoute un événement de clic à l'élément 'elt' (flèche gauche)
    elt.addEventListener('click', () => {
      // Décrémente l'indice 'currentIndex' pour passer au média précédent
      this.currentIndex -= 1;
      const lightBoxMedia = document.getElementById('works-lightbox-media');
      const lightBoxName = document.getElementById('works-lightbox-name');
      // Si l'indice 'currentIndex' est négatif, cela signifie qu'on est sur le premier média
      // et qu'on veut passer au dernier
      // Donc on met 'currentIndex' à la position du dernier élément dans le tableau
      if (this.currentIndex < 0) {
        this.currentIndex = media.length - 1;
        this.currentIndex = name.length - 1;
      }

      // Met à jour le contenu de la lightbox avec le média précédent
      const src = media[this.currentIndex];
      const nameSrc = name[this.currentIndex];
      lightBoxMedia.innerHTML = `${src}`;
      lightBoxName.innerHTML = `${nameSrc}`;
    });
  }

  next(elt, media, name) {
    elt.addEventListener('click', () => {
      this.currentIndex += 1;
      const lightBoxMedia = document.getElementById('works-lightbox-media');
      const lightBoxName = document.getElementById('works-lightbox-name');

      if (this.currentIndex > name.length - 1) {
        this.currentIndex = 0;
      }

      const src = media[this.currentIndex];
      const nameSrc = name[this.currentIndex];

      lightBoxMedia.innerHTML = `${src}`;
      lightBoxName.innerHTML = `${nameSrc}`;
    });
  }

  close() {
    document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
      this.lightbox = document.getElementById('works-lightbox');

      this.lightbox.style.display = 'none';
    });
  }

  keyboard(currentMedia, currentMediaName) {
    document.addEventListener('keydown', (event) => {
      const lightBoxMedia = document.getElementById('works-lightbox-media');
      const lightBoxName = document.getElementById('works-lightbox-name');

      if (event.code === 'Escape') {
        const lightBox = document.getElementById('works-lightbox');
        lightBox.style.display = 'none';
      } else if (event.code === 'ArrowRight') {
        this.currentIndex += 1;

        if (this.currentIndex > currentMediaName.length - 1) {
          this.currentIndex = 0;
        }

        const src = currentMedia[this.currentIndex];
        const nameSrc = currentMediaName[this.currentIndex];

        lightBoxMedia.innerHTML = `${src}`;
        lightBoxName.innerHTML = `${nameSrc}`;
      } else if (event.code === 'ArrowLeft') {
        this.currentIndex -= 1;

        if (this.currentIndex < 0) {
          this.currentIndex = currentMediaName.length - 1;
        }

        const src = currentMedia[this.currentIndex];
        const nameSrc = currentMediaName[this.currentIndex];

        lightBoxMedia.innerHTML = `${src}`;
        lightBoxName.innerHTML = `${nameSrc}`;
      }
    });

    const getMedias = Array.from(document.getElementsByClassName('ph-media'));
    getMedias.forEach((mediaWorks, index) => {
      mediaWorks.addEventListener('click', () => {
        this.open(index, currentMedia, currentMediaName);
      });

      mediaWorks.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
          this.open(index, currentMedia, currentMediaName);
        }
      });
    });
  }

  open(index, currentMedia, currentMediaName) {
    const lightBoxMedia = document.getElementById('works-lightbox-media');
    const lightBoxName = document.getElementById('works-lightbox-name');
    const src = currentMedia[index];
    const nameSrc = currentMediaName[index];
    this.currentIndex = index;

    document.getElementById('works-lightbox').style.display = 'block';
    lightBoxMedia.innerHTML = `${src}`;
    lightBoxName.innerHTML = `${nameSrc}`;
  }
}
