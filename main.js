// constantes et variables globales
const vowels = "aeiouy";
let collection = [];
let cardsContainer;
let photographers;
let mediaSet;

// construction du tableau des tags
const tagSet = [];

// function constructeur des tags
function CreeTag(lib, status) {
  this.name = lib;
  this.state = status;
};

// le tag all permet d'afficher tous les photographes au chargement de la page
// il devient false si au moins un tag est sélectionné
let firstTag = new CreeTag("all", true);
tagSet.push(firstTag);

// construit le libellé d'affichage des tags
function libTag(arg) {
  let str = arg.substr(1, arg.length);
  let maj = arg[0].toUpperCase();
  let lib = "#" + maj + str;
  return lib
};

// fonction de récupération des données JSON au chargement de la page
function loadJson() {
  let response = fetch("./public/data/FishEyeData.json")
    .then(response => response.json())
    .then(function (data) {
      photographers = data.photographers;
      mediaSet = data.media;
      loadTags(photographers)
      affTags()
      displayPhotographersMain(photographers)
      // DOM Elements
      const navBtn = document.querySelectorAll(".tagBtnNav");
      const allCards = document.querySelectorAll(".pcard");
      // add event listeners
      navBtn.forEach((btn) => btn.addEventListener("click", selectTagMain));
      allCards.forEach((card) => card.addEventListener("click", loadMod1));
    })
};

// chargement des tags à partir des photographes
function loadTags(photographers) {
  let appendTag = true
  photographers.forEach(p => {
    p.tags.forEach(t => {
      let appendTag = true;
      for (i = 0; i < tagSet.length; i++) {
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

// affichage des tags dans le <nav> et dans les cards
// sauf le premier, "all", qui est un switch géré par le script
function affTags() {
  tagsContainer = document.getElementById("main-tags-select");
  for (let i = 1; i < tagSet.length; i++) {
    let tag = document.createElement('button');
    let wtagLib = libTag(tagSet[i].name);
    tag.setAttribute('id', tagSet[i].name);
    tag.setAttribute('class', "tagBtnNav tagNotSelect");
    let first = tagSet[i].name[0];
    let vowel = false;
    for (let i = 0; i < 6; i++) {
      if (first == vowels[i]) {
        vowel = true;
        break;
      }
    }
    if (vowel == true) {
      tag.setAttribute('aria-label', "Sélectionner les photos d'" + tagSet[i].name);
    } else {
      tag.setAttribute('aria-label', "Sélectionner les photos de " + tagSet[i].name);
    }
    tag.textContent = wtagLib;
    tagsContainer.append(tag);
  }
}

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
  cardsContainer = document.getElementById("cards-container");
  let cardPhotographe = document.createElement('a');
  cardPhotographe.setAttribute('href', "./pages/photographe.html?id=" + p.id);
  cardPhotographe.setAttribute('id', p.id);
  cardPhotographe.setAttribute('class', "pcard");
  cardPhotographe.setAttribute('aria-label', "Cliquer pour choisir ce photographe");
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
  let tagsPhotographe = document.createElement('div');
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

// clic sur un tag page principale
function selectTagMain(event) {
  sTag = event.currentTarget.id
  for (let t = 1; t < tagSet.length; t++) {
    if (tagSet[t].name == sTag) {
      if (tagSet[t].state) {
        tagSet[t].state = false;
        event.currentTarget.setAttribute('class',"tagBtnNav tagNotSelect")
        setTagSet0()
        break
      } else {
        tagSet[t].state = true;
        tagSet[0].state = false;
        event.currentTarget.setAttribute('class',"tagBtnNav tagSelect")
        break
      }
    }
  }
  displayPhotographersMain(photographers)
};

function setTagSet0() {
  tagSet[0].state = true
  for (let i = 1; i < tagSet.length; i++) {
    if (tagSet[i].state == true) {
      tagSet[0].state = false
      break
    }
  }
}

// traitement de la modale 1
function getPhotographeId() {
  let parameters = location.search.substring(1).split("&");
  console.log(parameters)
  let temp = parameters[0].split("=");
  let p = unescape(temp[1]);
  console.log(p);
  debugger
}

// charge la modale avec les données du photographe sélectionné (mod1)
function loadMod1() {
  let p = getPhotographeId()
  //  let p = photographers[0];
  let w_img = document.querySelector('.mod1Head_sel_img__img')
  let w_name = document.querySelector('.mod1Head_sel_name')
  let w_place = document.querySelector('.mod1Head_sel_place')
  let w_alt = document.querySelector('.mod1Head_sel_alt')
  let w_tags = document.querySelector('.mod1Head_sel_tags')
  console.log(w_name)
  w_img.setAttribute('src', "../public/img/PhotographersIDPhotos/" + p.portrait)
  w_name.setAttribute('id', p.id)
  w_name.textContent = p.name
  w_place.textContent = p.city + ", " + p.country
  w_alt.textContent = p.alt
  for (let i = 0; i < p.tags.length; i++) {
    let tagPhotographe = document.createElement('div')
    let wtagLib = libTag(p.tags[i])
    tagPhotographe.setAttribute('class', "mod1Head_sel_tagsx")
    tagPhotographe.setAttribute('aria-label', "Une des catégories du photographe")
    tagPhotographe.textContent = wtagLib
    w_tags.append(tagPhotographe)
  }
  const collection = loadCollection(p)
  mod1.style.display = "block"
};

function loadCollection(p) {
  mediaSet.forEach(item => {
    if (item.photographerId == p.id) {
      collection.push(item)
    }
  })
  console.log(collection)
  debugger
  return collection
};

//************ exécution du script ****************//  
loadJson()
//console.log("Affichage modale 1")

//loadMod1()

/*
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
  image: "chose.jpg"
});
const video = new factory({
  video: "vid.mp4"
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