// page d'un photographe
// l'Id du photographe est passée en paramètre lors de l'appel de la page
// initialisation des données du photographe sélectionné, tags et média  
var collection = [];
var tagSetP = [];
var allMedias = true; // pour afficher tous les medias d'un photographe si aucun tag sélectionné dans main page
var modale1;
// initialisation de l'affichage des medias
// supprime les cards affichées (s'il y en a...)
function effaceItems() {
  let listeCards = document.getElementsByTagName('section');
  let length = listeCards.length;
  if (length > 0) {
    let parentCard = listeCards[0].parentNode;
    for (let i = 0; i < length; i++) {
      parentCard.removeChild(listeCards[0]);
    }
  }
}

// affiche la collection des medias du photographe suivant les tags sélectionnés
function affCollectionP(modale1) {
  effaceItems()
  var mediaShow = document.createElement('section');
  mediaShow.setAttribute('class', "mod1__show");
  mediaShow.setAttribute('aria-label', "Réalisations de ce photographe");
  modale1.append(mediaShow);
  collection.forEach(item => {
    if (allMedias) {
      affCollectionI(mediaShow, item);
    } else {
      //      debugger
      tagSetP.forEach(t => {
        if ((item.tags == t.name) && (t.state)) {
          affCollectionI(mediaShow, item);
        }
      })
    }
  })
  // Après l'affichage au chargement, on utilise les l'état des tags pour l'affichage de la collection
  allMedias = false
};

// affiche un media du photographe
function affCollectionI(mediaShow, item) {
  let card = document.createElement('p');
  card.setAttribute('class', "mod1__showx");
  card.setAttribute('aria-label', item.title);
  card.setAttribute('alt', item.title);
  mediaShow.append(card);
  let viewData = new factory(item);
  if (item.id == 5234343 || item.id == 8328953) {
    debugger
  }
  let view = viewData.getEl()
  view.setAttribute('class', "mod1__showxv");
  debugger
  view.setAttribute('height', mediaShow.clientWidth * 0.567);
  card.append(view);
  let infos = document.createElement('div');
  infos.setAttribute('class', "mod1__showxd");
  card.append(infos);
  let title = document.createElement('div');
  title.setAttribute('class', "mod1__showxdt");
  title.setAttribute('aria-label', item.title);
  title.setAttribute('alt', item.title);
  title.textContent = item.title;
  infos.append(title);
  let likes = document.createElement('div');
  likes.setAttribute('class', "mod1__showxdl");
  infos.append(likes);
  let nbLikes = document.createElement('div');
  nbLikes.setAttribute('class', "mod1__showxdln");
  nbLikes.setAttribute('aria-label', "Nombre de \"j'aime\"");
  nbLikes.textContent = item.likes;
  likes.append(nbLikes);
  let iconLikes = document.createElement('c');
  iconLikes.setAttribute('class', "mod1__showxdlc");
  //  <i class="far fa-heart"></i>
  likes.append(iconLikes);
  let iconLikesi = document.createElement('i');
  iconLikesi.setAttribute('class', "fas fa-heart");
  iconLikes.append(iconLikesi);
};

// clic sur un tag du photographe : sélection ou annulation de la sélection
function selectTagP(event) {
  debugger
  let sTag = event.currentTarget.id;
  for (let t of tagSetP) {
    if (t.name == sTag) {
      t.switchTag()
      if (t.state) {
        event.currentTarget.setAttribute('class', "tagBtnP mod1__tagsx tagSelect")
      } else {
        event.currentTarget.setAttribute('class', "tagBtnP mod1__tagsx tagNotSelect")
      }
      break
    }
  }
  affCollectionP();
};

function getPhotographeSel(id) {
  for (let p = 0; p < photographersSet.length; p++) {
    if (photographersSet[p].id == id) {
      return new Photographer(photographersSet[p])
    }
  }
  alert("Photographe inconnu")
  window.close()
}

function initPhotographerData() {
  let firstName = pSel.name.split(" ")
  photographerDirectory = repMedia + firstName[0] + "/"
  pSel.loadTagsP()
  pSel.loadCollectionP()
};

function readStorage() {
  photographersSet = JSON.parse(localStorage.getItem('pSet'))
  mediaSet = JSON.parse(localStorage.getItem('mSet'))
  tagSetM = JSON.parse(localStorage.getItem('tSet'))
}

readStorage()
const pSel = new Photographer(getPhotographeSel(getParams()))
//alert("pause")
initPhotographerData()
pSel.affModale1();
// DOM Elements
const navBtnP = document.querySelectorAll(".tagBtnP");
// event listener : click sur un bouton tag
navBtnP.forEach((btn) => btn.addEventListener("click", selectTagP));