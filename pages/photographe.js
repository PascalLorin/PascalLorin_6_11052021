// page d'un photographe
// l'Id du photographe est passée en paramètre lors de l'appel de la page
// initialisation des données du photographe sélectionné, tags et média  
var collection = [];

// clic sur une icone : incrémentation du nombre de likes
function incrLikes(event) {
  let currentMedia = event.currentTarget.id
  document.getElementById(currentMedia).previousSibling.textContent++
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id == currentMedia) {
      collection[i].likes++
      break
    }
  }
}

// clic sur un tag du photographe : sélection ou annulation de la sélection
function selectTagP(event) {
  let sTag = event.currentTarget.id
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
  setAllMedias()
  affCollectionP()
};

function getPhotographeSel(id) {
  for (let p = 0; p < photographersSet.length; p++) {
    if (photographersSet[p].id == id) {
      return new Photographer (photographersSet[p])
    }
  }
  alert("Photographe inconnu")
  window.close()
}

// affiche la modale2 : formulaire de contact du photographe sélectionné
function affModale2() {
  modale1.style.display = "none"
  modale2.style.display = "flex"
}

// la modale form ne s'affiche pas au lancement
modale2 = document.getElementById('mod2')
modale2.style.display = "none"
modale1 = document.getElementById('mod1')
modale1.style.display = "block"

// début du script
readStorage()
pSel = getPhotographeSel(getParams())
pSel.initPhotographerData()
pSel.affModale1()
// DOM Elements : boutons des tags, bouton contact
const navBtnP = document.querySelectorAll(".tagBtnP")
const btnMod2 = document.querySelector(".mod1__btn_form")
// event listener : click sur un bouton tag du photographe
navBtnP.forEach((btn) => btn.addEventListener("click", selectTagP))
btnMod2.addEventListener("click", affModale2)
