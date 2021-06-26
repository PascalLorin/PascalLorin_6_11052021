// page d'un photographe
// l'Id du photographe est passée en paramètre lors de l'appel de la page
// initialisation des données du photographe sélectionné, tags et médias
// ou récupération de sa collection si retour du caroussel  
var collection = []
pSel = {}
var totalLikes = 0
const libCrit = [" ", "popularité décroissante", "date décroissante", "ordre alphabétique"]

// clic sur une icone : incrémentation du nombre de likes
function incrLikes(event) {
  let currentMedia = event.currentTarget.id
  document.getElementById(currentMedia).previousSibling.textContent++
  if (screen.width > 1199) {
    document.querySelector(".mod1__aside_likesN").textContent++
  }
  totalLikes++
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].id == currentMedia) {
      collection[i].likes++
      writeStorageCollection()
      break
    }
  }
}

// clic sur un tag du photographe : sélection ou annulation de la sélection
function selectTagP(event) {
  let sTag = event.currentTarget.id
  for (let t of tagSetP) {
    if (sTag == t.name) {
      t.switchTag()
      if (t.state) {
        event.currentTarget.setAttribute('class', "tagSelect tagBtnP mod1__tagsx")
      } else {
        event.currentTarget.setAttribute('class', "tagNotSelect tagBtnP mod1__tagsx")
      }
      break
    }
  }
  writeStorageCollection()
  setAllMedias(tagSetP)
  affCollectionP()
};

function getPhotographeSel(id) {
  for (let p = 0; p < photographersSet.length; p++) {
    if (photographersSet[p].id == id) {
      return new Photographer(photographersSet[p])
    }
  }
  alert("Photographe inconnu")
  closeModale1()
}

// affiche la modale2 : formulaire de contact du photographe sélectionné
function affModale2() {
  debugger
  modale1.style.display = "none"
  modale2.style.display = "flex"
}

function affMenuTri(event) {
  event.cancelBubble = true
  event.preventDefault()
  let menuTriDisplay = document.querySelector(".mod1__menuTri_container")
  if ((event.type == 'click') && (menuTriDisplay.style.display != "none")) {
    menuTriDisplay.style.display = "none"
  } else {
    menuTriDisplay.style.display = "block"
    const btnTri = document.querySelectorAll(".mod1__menuTri_btn")
    btnTri.forEach((btn) => btn.addEventListener("click", triCollection))
  }
}

// Traitement de la touche enfoncée
function actionKey(event) {
  // Escape => page précédente
  switch (event.key) {
    case "Escape":
      event.preventDefault()
      closeModale1()
  }
}

function closeModale1() {
  removeCollection()
  history.back()
}

// début du script
// la modale form ne s'affiche pas au lancement
modale2 = document.getElementById('mod2')
modale2.style.display = "none"
modale1 = document.getElementById('mod1')
modale1.style.display = "block"
tagSetP = []
let psel = JSON.parse(localStorage.getItem('pSel'))
if (psel != null) {
  pSel = new Photographer(psel)
  pSel.loadPhotographerData()
} else {
  readStorageMain()
  pSel = getPhotographeSel(getParams())
  pSel.initPhotographerData()
}
pSel.affModale1()
// DOM Elements : boutons des tags, bouton contact, clic sur logo (fermeture)
const logoBtn = document.querySelector(".mod1Head__logo")
const navBtnP = document.querySelectorAll(".tagBtnP")
const btnMod2 = document.querySelector(".mod1__btn_form")
// event listener : clic sur un bouton tag du photographe
logoBtn.addEventListener('click', closeModale1)
navBtnP.forEach((btn) => btn.addEventListener("click", selectTagP))
btnMod2.addEventListener('click', affModale2)
if (screen.width > 1199) {
  const menuTriBtn = document.querySelector(".mod1__menuTri")
  const menuTriBtnI = document.querySelector(".mod1__menuTri_btn1ContIcon")
  menuTriBtn.addEventListener('mouseover', affMenuTri)
  menuTriBtnI.addEventListener('click', affMenuTri)
}
window.addEventListener('keydown', actionKey)