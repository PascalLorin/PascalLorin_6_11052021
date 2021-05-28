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
    for (let t = 0; t < p.tags.length; t++) {
      for (let i = 0; i < tagSetM.length; i++) {
        if ((tagSetM[i].state) && (tagSetM[i].name == p.tags[t])) {
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

// clic sur un tag : sélection ou annulation de la sélection
// réaffiche les photographes en fonction du nouvel état des tags
function selectTagMain(event) {
  let eTag = event.currentTarget.id;
  for (let i = 0; i < tagSetM.length; i++) {
    if (eTag == tagSetM[i].name) {
      tagSetM[i].switchTag()
      if (tagSetM[i].state) {
        event.currentTarget.setAttribute('class', "tagBtnNav tagSelect")
      } else {
        event.currentTarget.setAttribute('class', "tagBtnNav tagNotSelect")
      }
      break
    }
  }
  localStorage.setItem('tSet', JSON.stringify(tagSetM))
  debugger
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
      loadTags()
      localStorage.setItem('tSet', JSON.stringify(tagSetM))
      affTags();
      displayPhotographersAll();
      // DOM Elements & events listeners : click sur un bouton tag
      const navBtn = document.querySelectorAll(".tagBtnNav");
      navBtn.forEach((btn) => btn.addEventListener("click", selectTagMain));
    })
};

//************ exécution du script ****************
loadJson();