export default class HomePageBuilder {
// Le commentaire indique que cette méthode construit la section des photographes,
// appelle la fonction "filtertags" et le bouton "passer au contenu".

  // Cette méthode prend un paramètre "data" qui est un objet contenant des informations des ptgr.
  displayPhotographers(data) {
    // Cette ligne extrait le tableau de photographes de l'objet "data".
    const { photographers } = data;

    // Cette ligne utilise la méthode "map" pour boucler sur chaque photographe du tableau.
    photographers.map((photographe) => {
      // Cette ligne récupère l'élément de la page HTML qui a l'identifiant "photographers".
      const sectionPhotographers = document.getElementById('photographers');

      // Cette ligne crée un nouvel élément "article" en JavaScript.
      const articlePhotographers = document.createElement('article');

      // Cette variable "templatePhotographer" est un modèle de texte
      // qui utilise les données du photographe pour créer une structure HTML.
      this.templatePhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="Portrait de ${photographe.name}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            `;
      sectionPhotographers.appendChild(articlePhotographers);

      // Cette ligne remplit l'élément "articlePhotographers" avec le modèle de texte créé plus tôt.
      articlePhotographers.innerHTML = this.templatePhotographer;

      return articlePhotographers;
    });
  }
}
