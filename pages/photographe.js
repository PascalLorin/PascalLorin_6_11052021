// page d'un photographe
// l'Id du photographe est passée en paramètre lors de l'appel de la page
alert("page photographe")
debugger

// import de data et de fonctions de main.js
// import {vowels, tagSet, photographersSet, mediaSet, CreeTag, libTag, affTags} from "../main.js";
import {
  firstTag,
  vowels,
  tagSet,
  photographersSet,
  mediaSet,
  CreeTag,
  libTag,
  tagAriaLabel,
  setTag0
} from "../main.js";

alert(photographersSet)

// construction du tableau des tags de photographe
const tagSetP = [];
let collection = [];

// le tag all permet d'afficher toutess les photos
// il devient false si au moins un tag est sélectionné
//let firstTag = new CreeTag("all", true);
tagSetP.push(firstTag);

// charge la modale avec les données du photographe sélectionné (mod1)
function loadMod1() {
  const p = getPhotographeId();
  let w_img = document.querySelector('.mod1__img img');
  let w_name = document.querySelector('.mod1__name');
  let w_place = document.querySelector('.mod1__place');
  let w_alt = document.querySelector('.mod1__alt');
  let w_tags = document.querySelector('.mod1__tags');
  w_img.setAttribute('src', "../public/img/PhotographersIDPhotos/" + p.portrait);
  w_name.setAttribute('id', p.id);
  w_name.textContent = p.name;
  w_place.textContent = p.city + ", " + p.country;
  w_alt.textContent = p.alt;
  //  for (let i = 0; i < p.tags.length; i++) {
  p.tags.forEach(t => {
    let tagPhotographe = document.createElement('button');
    let wtagLib = libTag(p.tags[t]);
    for (let i = 1; i < tagSet.length; i++) {
      tagPhotographe.setAttribute('id', p.tag[t]);
      if (tagSet[i] == p.tags[t]) {
        let newTag = new CreeTag(t, tagSet[i].state);
        if (tagSet[i].state) {
          tagPhotographe.setAttribute('class', "tagBtnP mod1__tagsx tagSelect");
        } else {
          tagPhotographe.setAttribute('class', "tagBtnP mod1__tagsx tagNotSelect");
        }
      }
    }
    let w = tagSetP.push(newTag);
    let ariaLib = tagAriaLabel(p.tags[t]);
    tagPhotographe.setAttribute('aria-label', ariaLib);
    tagPhotographe.textContent = wtagLib;
    w_tags.append(tagPhotographe);
  })
  loadCollection(p);
  // DOM Elements
  const navBtnP = document.querySelectorAll(".tagBtnP");
  // event listener : click sur un bouton tag
  navBtnP.forEach((btn) => btn.addEventListener("click", selectTagP));

  mod1.style.display = "block";
};

function getPhotographeId(p) {
  debugger
  //  let url = window.location.pathname
  //  console.log(url)
  let param = window.location.search.substring(1);
  let temp = param.split("=");
  photographersSet.forEach(p => {
    if (temp[1] == photographersSet[p].id) {
      return Photographer(photographersSet[p])
    }
  })
}

function loadCollection(p) {
  mediaSet.forEach(item => {
    if (item.photographerId == p.id) {
      collection.push(item)
    }
  })
  console.log(collection)
  debugger
  return
};

// clic sur un tag : sélection ou annulation de la sélection
function selectTagP(event) {
  let sTag = event.currentTarget.id
  for (let t = 1; t < tagSetP.length; t++) {
    if (tagSetP[t].name == sTag) {
      if (tagSetP[t].state) {
        tagSetP[t].state = false;
        event.currentTarget.setAttribute('class', "tagBtnP mod1__tagsx tagNotSelect")
        setTag0(tagSetP)
        break
      } else {
        tagSetP[t].state = true;
        tagSetP[0].state = false;
        event.currentTarget.setAttribute('class', "tagBtnP mod1__tagsx tagSelect")
        break
      }
    }
  }
};

// Contructeurs des objets photographer et media 
function Photographer(name, id, city, country, tags, tagline, price, portrait) {
  this.name = name;
  this.id = id;
  this.city = city;
  this.country = country;
  this.tags = tags;
  this.tagline = tagline;
  this.price = price;
  this.portrait = portrait;
}

function Media(id, photoId, title, image, tags, likes, date, price) {
  this.id = id;
  this.photographerId = photoId;
  this.title = title;
  this.image = image;
  this.tags = tags;
  this.likes = likes;
  this.date = date;
  this.price = price;
}

debugger
loadMod1()

//la class factory se charge pour nous de comprendre quel élément on cherche à créer
//on passe le contenu en argument directement au constructor lors de l'instanciation (new)
//on se sert de l'argument par défaut "" pour dire que par défaut content vaut la chaine de caractère vide, ce qui évite des erreurs
//on peut lui passer un objet json en paramètre lorsque l'on souhaiterai par exemple avoir des classes différentes pour chaque élément

class factory {
  constructor(content = {}) {
    // ici on se sert de includes pour savoir quelle est l'extension du fichier.
    // si c'est du mp4 on crée une vidéo,
    // autrement on crée une image
    if (content.video) return new factoryVideo(content.video);
    else return new factoryImage(content.image);
  }
}

//toujours la même classe permettant de créer une vidéo

class factoryVideo {
  constructor(content) {
    this.el = document.createElement("video");
    this.el.appendChild(document.createElement("source"));
    this.el.children[0].src = content;
  }
  // un getter permet ici de récupérer l'élément html créé dans le constructeur
  getEl() {
    return this.el;
  }
  affich() {
    document.body.appendChild(this.el);
  }
}

class factoryImage {
  constructor(content) {
    this.el = document.createElement("img");
    this.el.src = content;
  }
  getEl() {
    return this.el;
  }
  affich() {
    document.body.appendChild(this.el);
  }
}

//la création se fait maintenant toujours avec la même classe factory
const image = new factory({
  image: p.image
});
const video = new factory({
  video: p.video
});

//on peut toujours s'en servir de la même manière peu importe le type d'élément html
image.affich();
video.affich();


/*
const data = JSON.parse(data);
data.sort(function (key1, key2) {
  return key1.population < key2.population;
})
*/