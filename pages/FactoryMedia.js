// La class factory détermine quel élément on cherche à créer
// On passe un objet Json en argument au constructor lors de l'instanciation (new)
// Elle utilise le contenu de l'objet pour créer des classes différentes
// L'argument par défaut "" évite des erreurs
class factory {
  constructor(content = {}){
    // si l'argument contient une image, elle crée un élément image, sinon un élément vidéo
    if (content.image) {
      return new factoryImage(content)
    } else {
      return new factoryVideo(content)
    }
  }
}

// Classe permettant de créer une image
class factoryImage {
  constructor(content) {
    this.el = document.createElement('img');
    this.el.setAttribute('aria-label', "Photo intitulée " + content.title)
    this.el.setAttribute('alt', "Photo intitulée " + content.title)
    this.el.src = photographerDirectory + content.image;
  }
  // le getter permet de récupérer l'élément html créé dans le constructeur
  getEl() {
    return this.el;
  }
}

// Classe permettant de créer une vidéo
class factoryVideo {
  constructor(content) {
    this.el = document.createElement("video");
    this.el.controls = true;
    this.el.autoplay = false;
    this.el.muted = true;
    this.el.setAttribute('width', viewWidth);
    this.el.setAttribute('aria-label', "Vidéo intitulée " + content.title)
    this.el.setAttribute('alt', "Vidéo intitulée " + content.title)
    this.el.appendChild(document.createElement("source"));
    this.el.children[0].src = photographerDirectory + content.video;
  }
  // le getter de récupérer l'élément html créé dans le constructeur
  getEl() {
    return this.el;
  }
}
/*
//la création se fait maintenant toujours avec la même classe factory
const image = new factory({
  image: this.image
});
const video = new factory({
  video: this.video
});
*/