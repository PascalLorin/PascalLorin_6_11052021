//la class factory se charge pour nous de comprendre quel élément on cherche à créer
//on passe le contenu en argument directement au constructor lors de l'instanciation (new)
//on se sert de l'argument par défaut "" pour dire que par défaut content vaut la chaine de caractère vide, ce qui évite des erreurs
//on peut lui passer un objet json en paramètre lorsque l'on souhaiterai par exemple avoir des classes différentes pour chaque élément
class factory {
  constructor(content = {}) {
    // ici on se sert de includes pour savoir quelle est l'extension du fichier.
    // si c'est du mp4 on crée une vidéo,
    // autrement on crée une image
    if (content.image) return new factoryImage(content);
    else return new factoryVideo(content);
  }
}

//toujours la même classe permettant de créer une image
class factoryImage {
  constructor(content) {
    this.el = document.createElement('img');
    this.el.src = photographerDirectory + content.image;
  }
  // un getter permet ici de récupérer l'élément html créé dans le constructeur
  getEl() {
    return this.el;
  }
  affich() {
    document.appendChild(this.el);
  }
}

//toujours la même classe permettant de créer une vidéo
class factoryVideo {
  constructor(content) {
    this.el = document.createElement("video");
    this.el.appendChild(document.createElement("source"));
    this.el.children[0].src = photographerDirectory + content.video;
  }
  // un getter permet ici de récupérer l'élément html créé dans le constructeur
  getEl() {
    return this.el;
  }
  affich() {
    document.appendChild(this.el);
  }
}

//la création se fait maintenant toujours avec la même classe factory
const image = new factory({
  image: this.image
});
const video = new factory({
  video: this.video
});

//on peut toujours s'en servir de la même manière peu importe le type d'élément html
image.affich();
video.affich();
