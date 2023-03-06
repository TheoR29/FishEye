export default class Modal {
  // Événements, lance/ferme la fenêtre modale en cliquant sur le bouton 'contactez-moi'
  // et afficher le nom du photographe dans le formulaire.
  modal(data) {
    const modalBtn = document.getElementById('ph-contact');
    const closeBtn = document.getElementsByClassName('close-form-icon');

    if (modalBtn) {
      modalBtn.addEventListener('click', this.launchModal);
      this.formPhName(data);
    }
    if (closeBtn) {
      closeBtn[0].addEventListener('click', this.closeModal);
    }
  }

  // LANCER LA MODALE
  launchModal() {
    this.modalbg = document.getElementById('form-dialog');

    this.modalbg.style.display = 'block';
  }

  // FERMER LA MODALE
  closeModal() {
    this.modalbg = document.getElementById('form-dialog');

    this.modalbg.style.display = 'none';
  }

  // AFFICHER LES NOMS DE PH DANS LE FORMULAIRE
  // récupère l'ID du photographe à partir de l'URL et utilise cet ID pour trouver le photographe
  // correspondant dans les données fournies data. Elle met ensuite à jour le contenu HTML de
  // l'élément ayant l'ID "ph-form-name" avec le nom du photographe récupéré.
  formPhName(data) {
    const id = window.location.search.split('id=')[1];
    const photographers = !id ? data : data.filter(
      (photographer) => photographer.id === parseInt(id, 10),
    );
    const phName = document.getElementById('ph-form-name');
    this.phNameTemplate = `${photographers[0].name}`;
    phName.innerHTML = this.phNameTemplate;
  }
}
