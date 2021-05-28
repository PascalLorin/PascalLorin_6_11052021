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

// affichage de la page principale avec tous les photographes au lancement 
function displayPhotographersAll() {
  photographersSet.forEach(p => {
    let photographer = new Photographer(p);
    photographer.displayPhotographerM()
  })
};

// affichage des photographes possédant au moins un des tags sélectionné(s)
function displayPhotographersMain() {
  effaceCards();
  photographersSet.forEach(p => {
    let displayP = false
    let photographer = new Photographer(p);
    for (let t of p.tags) {
      for (let i of tagSetM) {
        if ((i.state) && (i.name == t)) {
          displayP = true
          break
        }
      }
      if (displayP) {
        photographer.displayPhotographerM()
        break
      }
    }
  })
};
function writeStorageJson() {
  localStorage.setItem('pSet', JSON.stringify(photographersSet))
  localStorage.setItem('mSet', JSON.stringify(mediaSet))
}

function writeStorageTags() {
  localStorage.setItem('tSet', JSON.stringify(tagSetM))
}

// clic sur un tag : sélection ou annulation de la sélection
// réaffiche les photographes en fonction du nouvel état des tags
function selectTagMain(event) {
  let sTag = event.currentTarget.id;
  for (let t of tagSetM) {
    if (sTag == t.name) {
      t.switchTag()
      if (t.state) {
        event.currentTarget.setAttribute('class', "tagBtnNav tagSelect")
      } else {
        event.currentTarget.setAttribute('class', "tagBtnNav tagNotSelect")
      }
      break
    }
  }
  writeStorageTags()
  displayPhotographersMain()
};

// fonction de récupération des données JSON au chargement de la page
// et exécution de la page principale
function loadJson() {
  let response = fetch(fichierJson)
    .then(response => response.json())
    .then(function (data) {
      photographersSet = data.photographers
      mediaSet = data.media
      writeStorageJson()
      loadTagsM()
      writeStorageTags()
      affTagsM()
      displayPhotographersAll()
      // DOM Elements & events listeners : click sur un bouton tag
      const navBtn = document.querySelectorAll(".tagBtnNav")
      navBtn.forEach((btn) => btn.addEventListener("click", selectTagMain))
    })
};

//************ exécution du script ****************
loadJson();