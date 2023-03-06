export default class Form {
  static fields() {
    // RÉCUPÉRATION DES ÉLÉMENTS DU FORMULAIRE DANS LE DOM
    const form = document.getElementById('contact-form');
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/; // Expression régulière pour valider le prénom et le nom avec des lettres uniquement

    // ENVOI DU FORMULAIRE
    form.addEventListener('submit', (e) => {
      e.preventDefault(); // Empêcher la soumission par défaut du formulaire
      const isValid = Form.checkNames(firstName, regex) // Vérifier le prénom
            && Form.checkNames(lastName, regex) // Vérifier le nom
            && Form.checkEmail(email) // Vérifier l'e-mail
            && Form.checkMessage(message); // Vérifier le message

      if (isValid) { // Si tous les champs sont valides
        firstName.style.border = 'none';
        lastName.style.border = 'none';
        email.style.border = 'none';
        message.style.border = 'none';
        // Afficher les informations du formulaire dans la console
        Form.consoleMessageValid(firstName, lastName, email, message);
        document.getElementById('contact-form').reset(); // Réinitialiser le formulaire
      } else {
        // Afficher les erreurs de saisie
        Form.errorVerification(firstName, lastName, email, message, regex);
      }
    });
  }

  // Afficher les informations du formulaire dans la console
  static consoleMessageValid(firstName, lastName, email, message) {
    console.group('Contact Information');
    console.info(`Prénom : ${firstName.value}`);
    console.info(`Nom : ${lastName.value}`);
    console.info(`Email : ${email.value}`);
    console.info(`Message : ${message.value}`);
    console.groupEnd();
  }

  // Vérifier la saisie de tous les champs et afficher les erreurs
  static errorVerification(firstName, lastName, email, message, regex) {
    Form.checkNames(firstName, regex);
    Form.checkNames(lastName, regex);
    Form.checkEmail(email);
    Form.checkMessage(message);
  }

  // Vérifier le prénom et le nom
  static checkNames(elt, regex) {
    const inputElement = elt;
    if (inputElement.value.trim().length < 2 || inputElement.value.trim() === '' || !inputElement.value.match(regex)) {
      inputElement.parentElement.setAttribute('data-error-visible', 'true');
      inputElement.style.border = '2px solid #e54858'; // Afficher une bordure rouge pour indiquer une erreur
      return false;
    }
    inputElement.parentElement.setAttribute('data-error-visible', 'false');
    inputElement.style.border = 'solid #279e7a 0.19rem'; // Afficher une bordure verte pour indiquer une saisie valide
    return true;
  }

  // Vérifie si l'adresse e-mail saisie par l'utilisateur est valide
  static checkEmail(elt) {
    const inputElement = elt;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Vérifie si la valeur de l'élément correspond au format d'une adresse e-mail valide
    if (inputElement.value.trim().match(re)) {
      inputElement.parentElement.setAttribute('data-error-visible', 'false');
      inputElement.style.border = 'solid #279e7a 0.19rem';
      return true;
    }
    // Si la valeur ne correspond pas au format d'une adresse e-mail valide
    inputElement.parentElement.setAttribute('data-error-visible', 'true');
    inputElement.style.border = '2px solid #e54858';
    return false;
  }

  // Vérifie si le message saisi par l'utilisateur n'est pas vide
  static checkMessage(elt) {
    const inputElement = elt;
    if (inputElement.value.trim() === '' || inputElement.value.trim() == null) {
      // Si le message est vide ou nul, affiche un message d'erreur et
      // change la bordure de l'élément
      inputElement.parentElement.setAttribute('data-error-visible', 'true');
      inputElement.style.border = '2px solid #e54858';
      return false;
    }
    // Si le message n'est pas vide, efface le message d'erreur et change la bordure de l'élément
    inputElement.parentElement.setAttribute('data-error-visible', 'false');
    inputElement.style.border = 'solid #279e7a 0.19rem';
    return true;
  }
}
