// constantes et variables globales
const fichierJson = "./public/data/FishEyeData.json";
const vowels = "aeiouy";
const tagSet = [];

var photographersSet = [];
var mediaSet = [];


// function constructeur des tags
function CreeTag(lib, status) {
  this.name = lib;
  this.state = status;
};

// construction du tableau des tags de <nav>
// le tag all permet d'afficher tous les photographes au chargement de la page
// il devient false si au moins un tag est sélectionné
const firstTag = new CreeTag("all", true);
tagSet.push(firstTag);

// construit le libellé d'affichage des tags
function libTag(tag) {
  let str = tag.substr(1, tag.length);
  let maj = tag[0].toUpperCase();
  let lib = "#" + maj + str;
  return lib
};

// fonction de récupération des données JSON au chargement de la page
function loadJson() {
  let response = fetch(fichierJson)
    .then(response => response.json())
    .then(function (data) {
      photographers = data.photographers;
      mediaSet= data.media;
      debugger;
      loadTags(photographers);
      affTags(tagSet);
      displayPhotographersMain(photographers);
      // DOM Elements
      const navBtn = document.querySelectorAll(".tagBtnNav");
      const pcards = document.querySelectorAll(".pcard");
      // event listener : click sur un bouton tag
      navBtn.forEach((btn) => btn.addEventListener("click", selectTagMain));
      pcards.forEach((pcard) => pcard.addEventListener("click", loadMod1));
    })
};

// chargement des tags à partir des photographes
function loadTags(photographers) {
  let appendTag = true
  photographers.forEach(p => {
    p.tags.forEach(t => {
      let appendTag = true;
      for (let i = 0; i < tagSet.length; i++) {
        if (t == tagSet[i].name) {
          appendTag = false;
        }
      }
      if (appendTag) {
        let newTag = new CreeTag(t, false);
        let w = tagSet.push(newTag);
      }
    })
  })
};

// affichage des tags dans le <nav>, dans les cards et sur la page photographe
// sauf le premier, "all", qui est un switch géré par le script
function affTags(tags) {
  let tagsContainer = document.getElementById("tags-select");
  for (let i = 1; i < tags.length; i++) {
    let tag = document.createElement('button');
    let wtagLib = libTag(tags[i].name);
    tag.setAttribute('id', tags[i].name);
    tag.setAttribute('class', "tagBtnNav tagNotSelect");
    let ariaLib = tagAriaLabel(tags[i].name);
    tag.setAttribute('aria-label', ariaLib);
    tag.textContent = wtagLib;
    tagsContainer.append(tag);
  }
}

// crée le aria-label suivant 1ère lettre (voyelle ou pas)
function tagAriaLabel(name) {
  let first = name[0];
  let vowel = false;
  let lib = "";
  for (let i = 0; i < 6; i++) {
    if (first == vowels[i]) {
      vowel = true;
      break;
    }
  }
  if (vowel == true) {
    lib = "Sélectionner les photos d'" + name;
  } else {
    lib = "Sélectionner les photos de " + name;
  }
  return lib;
};

// initialisation de l'affichage
// supprime les cards affichées (s'il y en a...)
function effaceCards() {
  let listeCards = document.getElementsByClassName('pcard');
  let length = listeCards.length;
  if (length > 0) {
    let parentCard = listeCards[0].parentNode;
    for (let i = 0; i < length; i++) {
      parentCard.removeChild(listeCards[0]);
    }
  }
}

// affichage de la page principale
// avec tous les photographes au lancement (aucun tag sélectionné, tag "all"=true) 
// ou seulement ceux qui possèdent le(s) tag(s) sélectionné(s)
function displayPhotographersMain(photographers) {
  effaceCards();
  photographers.forEach(p => {
    if (tagSet[0].state) {
      displayPhotographer(p);
    } else {
      let displayP = false;
      p.tags.forEach(t => {
        for (i = 1; i < tagSet.length; i++) {
          if ((tagSet[i].state) && (t == tagSet[i].name)) {
            displayP = true;
            break;
          }
        }
      })
      if (displayP) {
        displayPhotographer(p);
      }
    }
  })
};

// affichage d'un photographe
function displayPhotographer(p) {
  let cardsContainer = document.getElementById("cards-container");
  let cardPhotographe = document.createElement('a');
  //  cardPhotographe.setAttribute('href', "./pages/photographe.html?id=" + p.id);
  cardPhotographe.setAttribute('target', "_blank");
  cardPhotographe.setAttribute('id', p.id);
  cardPhotographe.setAttribute('class', "pcard");
  cardPhotographe.setAttribute('aria-label', "Cliquer pour choisir ce photographe, nouvel onglet");
  cardsContainer.append(cardPhotographe);
  let pcardImg = document.createElement("div");
  pcardImg.setAttribute('class', "pcard__img");
  cardPhotographe.append(pcardImg);
  let pcardPortrait = document.createElement("img");
  pcardPortrait.setAttribute('src', "./public/img/PhotographersIDPhotos/" + p.portrait);
  pcardPortrait.setAttribute('alt', "Photo de " + p.name);
  pcardPortrait.setAttribute('aria-label', "Photo de " + p.name);
  pcardImg.append(pcardPortrait);
  let nomPhotographe = document.createElement('p');
  nomPhotographe.setAttribute('class', "pcard__name");
  nomPhotographe.setAttribute('aria-label', "Nom du photographe")
  nomPhotographe.textContent = p.name;
  cardPhotographe.append(nomPhotographe);
  let placePhotographe = document.createElement('p');
  placePhotographe.setAttribute('class', "pcard__place");
  placePhotographe.setAttribute('aria-label', "Localisation du photographe");
  placePhotographe.textContent = p.city + ", " + p.country;
  cardPhotographe.append(placePhotographe);
  let altPhotographe = document.createElement('p');
  altPhotographe.setAttribute('class', "pcard__alt");
  altPhotographe.setAttribute('aria-label', "Slogan du photographe");
  altPhotographe.textContent = p.tagline;
  cardPhotographe.append(altPhotographe);
  let pricePhotographe = document.createElement('p');
  pricePhotographe.setAttribute('class', "pcard__price");
  pricePhotographe.setAttribute('aria-label', "Tarif journalier du photographe");
  pricePhotographe.textContent = p.price + " € / jour";
  cardPhotographe.append(pricePhotographe);
  let tagsPhotographe = document.createElement('section');
  tagsPhotographe.setAttribute('class', "pcard__tags");
  tagsPhotographe.setAttribute('aria-label', "Catégories du photographe");
  cardPhotographe.append(tagsPhotographe);
  for (let i = 0; i < p.tags.length; i++) {
    let tagPhotographe = document.createElement('div');
    let wtagLib = libTag(p.tags[i]);
    tagPhotographe.setAttribute('class', "pcard__tagsx");
    tagPhotographe.setAttribute('aria-label', "Une des catégories du photographe");
    tagPhotographe.textContent = wtagLib;
    tagsPhotographe.append(tagPhotographe);
  }
};

// clic sur un tag : sélection ou annulation de la sélection
function selectTagMain(event) {
  let sTag = event.currentTarget.id
  for (let t = 1; t < tagSet.length; t++) {
    if (tagSet[t].name == sTag) {
      if (tagSet[t].state) {
        tagSet[t].state = false;
        event.currentTarget.setAttribute('class', "tagBtnNav tagNotSelect")
        setTag0(tagSet)
        break
      } else {
        tagSet[t].state = true;
        tagSet[0].state = false;
        event.currentTarget.setAttribute('class', "tagBtnNav tagSelect")
        break
      }
    }
  }
  if (url == "/") {
    displayPhotographersMain(photographers)
  }
};

function setTag0(tags) {
  tags[0].state = true
  for (let i = 1; i < tags.length; i++) {
    if (tags[i].state == true) {
      tags[0].state = false
      break
    }
  }
}

//*************  début du contenu de photographe.js ***********************

// construction du tableau des tags de photographe
const tagSetP = [];
let collection = [];

// le tag all permet d'afficher toutess les photos
// il devient false si au moins un tag est sélectionné
//let firstTag = new CreeTag("all", true);
tagSetP.push(firstTag);

// charge la modale avec les données du photographe sélectionné (mod1)
function loadMod1(event) {
  let p = event.currentTarget.id
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

/*
function getPhotographeId(p) {
  debugger
  //  let url = window.location.pathname
  //  console.log(url)
  let param = window.location.search.substring(1);
  let temp = param.split("=");
  photographers.forEach(p => {
    if (temp[1] == photographers[p].id) {
      return Photographer(photographers[p])
    }
  })
}
*/

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

/*
debugger
loadMod1()
*/

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
  image: this.image
});
const video = new factory({
  video: this.video
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


//*************  fin du contenu de photographe.js ***********************

//************ exécution du script ****************//  
loadJson()

/*
let url = window.location.pathname
if (url == "/") {
  loadJson()
}

export {
  firstTag,
  vowels,
  tagSet,
  photographers,
  mediaSet,
  CreeTag,
  libTag,
  tagAriaLabel,
  setTag0
};
*/
