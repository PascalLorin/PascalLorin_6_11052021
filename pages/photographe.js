// page d'un photographe
//tagSetM = localStorage.getItem('tSet')
tagsetM = JSON.parse(localStorage.getItem('tSet'))
//alert(tagSetM)
//debugger
// l'Id du photographe est passée en paramètre lors de l'appel de la page
// initialisation des données du photographe sélectionné, tags et média  
// le tag all permet d'afficher toutes les photos (indice 0 du tableau)
// il devient false si au moins un tag est sélectionné
var collection = [];
var tagSetP = [];
var photographeName;
tagSetP.push(new Tag("all", true));
// crée le tableau des media du photographe
function loadCollectionP(p) {
  mediaSet.forEach(m => {
    if (m.photographerId === p.id) {
      collection.push(new Media(m));
    }
  })
  return
};

// affiche le tableau des media du photographe suivant les tags sélectionnés
function affCollectionP(modale1) {
  alert("affichage collection")
  var mediaShow = document.createElement('section');
  mediaShow.setAttribute('class', "mod1__show");
  mediaShow.setAttribute('aria-label', "Réalisations de ce photographe");
  modale1.append(mediaShow);
  collection.forEach(item => {
    if (tagSetP[0]) {
      affCollectionI(mediaShow, item);
    } else {
      tagSetP.forEach(i => {
        if (item.tags == tagSetP[i].name) {
          affCollectionI(mediaShow, item);
        }
      })
    }
  })
  return
};

// affiche un media du photographe
function affCollectionI(mediaShow, item) {
  let card = document.createElement('p');
  card.setAttribute('class', "mod1__showx");
  card.setAttribute('aria-label', item.title);
  card.setAttribute('alt', item.title);
  mediaShow.append(card);
  let view = document.createElement('div');
  view.setAttribute('class', "mod1__showxv");
  card.append(view);
  debugger;
  let viewData = new factory(repMedia+photographeName+"/" + item.image);
  card.append(viewData);
  let infos = document.createElement('div');
  infos.setAttribute('class', "mod1__showxd");
  card.append(infos);
  let title = document.createElement('div');
  title.setAttribute('class', "mod1__showxdt");
  title.setAttribute('aria-label', item.title);
  title.setAttribute('alt', item.title);
  title.content = item.title;
  infos.append(title);
  let likes = document.createElement('div');
  likes.setAttribute('class', "mod1__showxdl");
  infos.append(likes);
  let nbLikes = document.createElement('div');
  nbLikes.setAttribute('class', "mod1__showxdln");
  nbLikes.setAttribute('aria-label', "Nombre de \"j'aime\"");
  nbLikes.content = item.likes;
  likes.append(nbLikes);
  let iconLikes = document.createElement('i');
  iconLikes.setAttribute('class', "mod1__showxdli");
  iconLikes.setAttribute('class', "fas fa-heart");
  //  <i class="far fa-heart"></i>
  likes.append(iconLikes);
  debugger
};

// clic sur un tag du photographe : sélection ou annulation de la sélection
function selectTagP(event) {
  let sTag = event.currentTarget.id;
  for (let t = 1; t < tagSetP.length; t++) {
    if (tagSetP[t].name == sTag) {
      switchTag(tagSetP[t]);
      if (tagSetP[t].state) {
        event.currentTarget.setAttribute('class', "tagBtnP mod1__tagsx tagSelect")
        tagSetP[0].state = false;
        break
      } else {
        event.currentTarget.setAttribute('class', "tagBtnP mod1__tagsx tagNotSelect")
        setTag0(tagSetP)
        break
      }
    }
  }
  affCollectionP();
};

function getPhotographeSel(id) {
  for (let i = 0; i < photographersSet.length; i++) {
    if (photographersSet[i].id == id) {
      return new Photographer(photographersSet[i])
    }
  }
  alert("Photographe inconnu");
  window.close();
}

// fonction de récupération des données JSON au chargement de la page
// et exécution de la page principale
function loadJsonP() {
  let response = fetch("../" + fichierJson)
    .then(response => response.json())
    .then(function (data) {
      photographersSet = data.photographers
      mediaSet = data.media
      loadTags()
      localStorage.setItem('tSet', JSON.stringify(tagSetM))
      /*
            localStorage.setItem('tSet', JSON.stringify(tagSetM))
      */
      var id = getParams()
      const pSel = getPhotographeSel(id)
      photographeName = pSel.name
      pSel.affModale1();
      // DOM Elements
      const navBtnP = document.querySelectorAll(".tagBtnP");
      // event listener : click sur un bouton tag
      navBtnP.forEach((btn) => btn.addEventListener("click", selectTagP));
    })
};

//************ exécution du script ****************
loadJsonP();