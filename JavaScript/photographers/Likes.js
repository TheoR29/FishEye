export default class LikeSubscriber {
  // ajouter ou retirer un "like" lors du clic sur l'icône de "like"
  static ecouteurLike() {
    const media = document.getElementById('ph-works');

    // fonction de gestion des clics
    const handleClick = (e) => {
      const classListTarget = typeof e.target.classList === 'undefined' ? [] : e.target.classList.value.split(' ');
      const hasClassBtn = classListTarget.indexOf('heart-btn') !== -1;

      if (hasClassBtn) {
        let totalLikes = parseInt(document.getElementById('total-likes').innerHTML, 10);
        const counterLike = e.target.parentNode.firstElementChild.firstElementChild;
        let likeValue = counterLike && parseInt(counterLike.innerHTML, 10);

        const isLiked = classListTarget.indexOf('isLiked') !== -1;

        // mise à jour du nombre total de "likes"
        // eslint-disable-next-line no-plusplus
        document.getElementById('total-likes').innerHTML = isLiked ? --totalLikes : ++totalLikes;
        // mise à jour du nombre de "likes"
        if (counterLike) {
          // eslint-disable-next-line no-plusplus
          counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;
        }

        // toggle de la classe "isLiked" pour ajouter ou retirer le "like"
        if (isLiked) {
          e.target.classList.remove('isLiked');
          e.target.classList.replace('fas', 'far');
        } else {
          e.target.classList.add('isLiked');
          e.target.classList.replace('far', 'fas');
        }
      }
    };

    // ajout d'un écouteur d'événement "click" sur l'élément "ph-works"
    media.addEventListener('click', handleClick);

    media.addEventListener('keydown', (e) => {
      const classListTarget = typeof e.target.classList === 'undefined' ? [] : e.target.classList.value.split(' ');
      const hasClassBtn = classListTarget.indexOf('heart-btn') !== -1;
      if (hasClassBtn && (e.code === 'Enter')) {
        e.preventDefault();
        handleClick(e);
      }
    });
  }
}
