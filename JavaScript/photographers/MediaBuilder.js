/* eslint-disable import/extensions */
import GalleryFactory from '../Factory/GalleryFactory.js';
import LikeSubscriber from './Likes.js';

export default class MediaBuilder {
  // appelle GalleryFactory pour créer la section médias avec la fonctionJ'aime et la boîte de likes
  photographersMedias(data) {
    const { media } = data;
    const gallery = new GalleryFactory().builder(media);
    this.boxLikesAndPrice(gallery.totalLike, data.photographers);
    LikeSubscriber.ecouteurLike();
  }

  // crée une boîte contenant le nombre total de likes et le prix du photographe
  boxLikesAndPrice(totalLike, photographers) {
    const id = window.location.search.split('id=')[1];

    photographers.forEach((element) => {
      if (parseInt(id, 10) === element.id) {
        const box = document.getElementById('box');
        this.boxTemplate = `
                <span id="total-likes">${totalLike}</span>
                <em class="fas fa-heart" aria-label='likes'></em>
                <span>${element.price} €/ jour</span>
                `;
        box.innerHTML = this.boxTemplate;
      }
    });
  }
}
