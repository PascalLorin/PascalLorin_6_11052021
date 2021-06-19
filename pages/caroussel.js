// caroussel du photographe sélectionné
// l'Id du média qui l'appelle est passée en paramètre pour être affichée en premier
// la collection est passée via localStorage
var collection = []
var currentIndex = 0
var index = 0
// offset Left, Top & Width du média affiché pour positionner les boutons du caroussel
var x, y, z;

function readStorageCollection() {
  pSel = new Photographer(JSON.parse(localStorage.getItem('pSel')))
  let medias = JSON.parse(localStorage.getItem('collection'))
  for (let media of medias) {
    collection.push(new Media(media))
  }
}

// affiche le média précédant ou le dernier suivant média en cours
function mediaPrev() {
  if (currentIndex == 0) {
    currentIndex = collection.length - 1
  } else {
    currentIndex--
  }
}

// affiche le média suivant ou le premier suivant média en cours
function mediaNext() {
  if (currentIndex == (collection.length - 1)) {
    currentIndex = 0
  } else {
    currentIndex++
  }
}

// traitement du bouton cliqué
function actionBtn(event) {
  let selBtn = (event.currentTarget.id)
  if (selBtn == "carBtnC") {
    // clic sur fermer, renvoie sur la page précédente
    history.back()
  }
  caroussel = document.getElementsByClassName('mod3__showx')
  caroussel[currentIndex].style.display = "none"
  switch (selBtn) {
    case "carBtnV":
      mediaPrev()
      break
    case "carBtnN":
      mediaNext()
      break
  }
  caroussel[currentIndex].style.display = "flex"
}

// afffichage des boutons autour du média
function affBtn() {
  var h = (viewWidth * proportion2 / 2) - 10
  if (viewWidth == 950) {
    h = (viewWidth * proportion3 / 2) - 10
  }
  let fromTop = y + h
  let fromLeft = x - 20
  // bouton "précédant"
  let btnPrev = document.createElement('button')
  btnPrev.setAttribute('class', "carBtn carBtnV ")
  btnPrev.setAttribute('id', "carBtnV")
  btnPrev.style.position = "absolute"
  btnPrev.style.top = fromTop + "px"
  btnPrev.style.left = fromLeft + "px"
  mediaShow.append(btnPrev)
  let btnPrevI = document.createElement('icon')
  btnPrevI.setAttribute('class', "fa fa-chevron-left carBtn_i")
  btnPrevI.setAttribute('aria-label', "Cliquez pour voir le média précedant")
  btnPrevI.setAttribute('alt', "Cliquez pour voir le média précedant")
  btnPrev.append(btnPrevI)
/*
  let newDiv = document.createElement("p")
  btnPrevIL = btnPrev.insertAdjacentElement('afterend',newDiv)
  btnPrevIL.style.visibility = "hidden"
  btnPrevIL.position = "fixed"
  btnPrevIL.style.top = (fromTop + 50) + "px"
  btnPrevIL.style.left = x + "px"
*/
  // bouton "suivant"
  let btnNext = document.createElement('button')
  btnNext.setAttribute('class', "carBtn carBtnN")
  btnNext.setAttribute('id', "carBtnN")
  btnNext.style.position = "absolute"
  btnNext.style.top = (y + h) + "px"
  btnNext.style.left = (x + z) + "px"
  mediaShow.append(btnNext)
  let btnNextI = document.createElement('icon')
  btnNextI.setAttribute('class', "fa fa-chevron-right carBtn_i")
  btnNextI.setAttribute('aria-label', "Cliquez pour voir le média suivant")
  btnNextI.setAttribute('alt', "Cliquez pour voir le média suivant")
  btnNext.append(btnNextI)
/*
  //  newDiv = document.createElement("div")
  btnNextIL= btnPrevI.insertAdjacentElement('afterend',newDiv)
  btnNextIL.style.visibility = "hidden"
*/
  // bouton "fermer"
  let btnClose = document.createElement('button')
  btnClose.setAttribute('class', "carBtn carBtnC")
  btnClose.setAttribute('id', "carBtnC")
  btnClose.style.position = "absolute"
  btnClose.style.top = y + "px"
  btnClose.style.left = (x + z) + "px"
  mediaShow.append(btnClose)
  let btnCloseI = document.createElement('icon')
  btnCloseI.setAttribute('class', "fa fa-times carBtn_i")
  btnCloseI.setAttribute('aria-label', "Cliquez pour fermer le caroussel")
  btnCloseI.setAttribute('alt', "Cliquez pour fermer le caroussel")
  btnClose.append(btnCloseI)
/*
  newDiv = document.createElement("div")
  btnCloseIL= btnPrevI.insertAdjacentElement('afterend',newDiv)
  btnCloseIL.style.visibility = "hidden"
*/
}

function initCaroussel() {
  paramMedia = getParams()
  readStorageCollection()
  pSel.setRepMedia()
}

// Script du caroussel
initCaroussel()
let doc = document.getElementById('mod3')
mediaShow = document.createElement('section')
mediaShow.setAttribute('class', "mod3__show")
doc.append(mediaShow)
viewWidth = doc.clientWidth - 60
if (viewWidth > 1200) {
  viewWidth = 950
}
// Affichage des médias dans le caroussel
collection.forEach(media => {
  media.affCarousselM()
  index++
})
// affichage des boutons autour du caroussel
affBtn()
// DOM Elements
const carBtn = document.querySelectorAll(".carBtn")
// event listener : click sur l'un des boutons
carBtn.forEach((btn) => btn.addEventListener("click", actionBtn))