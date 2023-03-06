// GET THE DATA FISH (PHOTOGRAPHERS &   MEDIAS)
export default class ApiFishEye {
// Récupération des données des photographes et de leurs médias
  async getDataFishEye() {
    // URL pour récupérer les données depuis le fichier JSON
    const url = 'data/photographers.json';

    // Envoi de la requête GET et attend la réponse
    const response = await fetch(url);

    // Extrait les données JSON de la réponse
    const data = await response.json();

    // Copie des tableaux de données des photographes et de leurs médias
    this.dataPhotographers = [...data.photographers];
    this.dataMedias = [...data.media];

    // Retourne les deux tableaux dans un objet
    return {
      photographers: this.dataPhotographers,
      media: this.dataMedias,
    };
  }
}
