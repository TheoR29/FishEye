/* eslint-disable import/extensions */
import Modal from './Modal.js';
import Form from './Form.js';

export default class PhotographerProfil {
// Vérifie sur quelle page se trouve l'utilisateur, si la position correspond à l' id du photographe
// crée la section 'Profil' du photographe
  displayPhotographerProfil(data) {
    const photographersData = data.photographers;
    const id = window.location.search.split('id=')[1];
    const photographers = !id ? photographersData : photographersData.filter(
      (photographer) => photographer.id === parseInt(id, 10),
    );
    const sectionPhotographerProfil = document.getElementById('ph-profil-header');
    this.templatePhotographerProfil = `
    <article aria-label="Photographer Profil" class="ph-profil"> 
        <div class='ph-infos'> 
            <h2>${photographers[0].name}</h2> 
            <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p> 
            <p class="ph-tagline">${photographers[0].tagline}</p> 
        </div> 
        <button id="ph-contact" title='Contact Me'>Contactez-moi</button> 
        <a href='#' title='Portrait de ${photographers[0].name}'>
            <img src="${photographers[0].portrait}" alt="Portrait de ${photographers[0].name}">
        </a> 
    </article>
            `;

    sectionPhotographerProfil.innerHTML = this.templatePhotographerProfil;
    // Crée une instance de la classe Modal et appelle la méthode 'modal' avec les données des ptg
    new Modal().modal(photographersData);
    Form.fields(); // Crée une instance de la classe Form et appelle la méthode 'fields'
  }
}
