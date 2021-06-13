// caroussel du photographe sélectionné
// l'Id du média qui l'appelle est passée en paramètre pour être affichée en premier
// la collection est passée via localStorage
var collection = []
var currentIndex = 0
var index = 0

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
  caroussel = document.getElementsByClassName('mod3__showdx')
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
function affBtn(x, y) {
  let h = (viewWidth * proportion2 / 2) - 10
  let fromTop = y + h
  let fromLeft = x - 20
  // bouton "précédant"
  let btnPrev = document.createElement('button')
  btnPrev.setAttribute('class', "carBtn carBtnV ")
  btnPrev.setAttribute('id', "carBtnV")
  btnPrev.setAttribute('aria-label', "Cliquez pour voir le média précedant")
  btnPrev.style.position = "absolute"
  btnPrev.style.top = (y + h) + "px"
  btnPrev.style.left = (x - 20) + "px"
  modale3.append(btnPrev)
  let btnPrevI = document.createElement('icon')
  btnPrevI.setAttribute('class', "fa fa-chevron-left carBtn_i")
  btnPrevI.setAttribute('alt', "Cliquez pour voir le média précedant")
  btnPrev.append(btnPrevI)
  // bouton "suivant"
  let btnNext = document.createElement('button')
  btnNext.setAttribute('class', "carBtn carBtnN")
  btnNext.setAttribute('id', "carBtnN")
  btnNext.setAttribute('aria-label', "Cliquez pour voir le média suivant")
  btnNext.style.position = "absolute"
  btnNext.style.top = (y + h) + "px"
  btnNext.style.left = (x + viewWidth) + "px"
  modale3.append(btnNext)
  let btnNextI = document.createElement('icon')
  btnNextI.setAttribute('class', "fa fa-chevron-right carBtn_i")
  btnNextI.setAttribute('alt', "Cliquez pour voir le média suivant")
  btnNext.append(btnNextI)
  // bouton "fermer"
  let btnClose = document.createElement('button')
  btnClose.setAttribute('class', "carBtn carBtnC")
  btnClose.setAttribute('id', "carBtnC")
  btnClose.setAttribute('aria-label', "Cliquez pour fermer le caroussel")
  btnClose.style.position = "absolute"
  btnClose.style.top = y + "px"
  btnClose.style.left = (x + viewWidth) + "px"
  modale3.append(btnClose)
  let btnCloseI = document.createElement('icon')
  btnCloseI.setAttribute('class', "fa fa-times carBtn_i")
  btnCloseI.setAttribute('alt', "Cliquez pour fermer le caroussel")
  btnClose.append(btnCloseI)
}

function initModale3() {
  paramMedia = getParams()
  readStorageCollection()
  pSel.setRepMedia()
}

// Script du caroussel
initModale3()
modale3 = document.getElementsByClassName('mod3')
mediaShow = document.createElement('section')
mediaShow.setAttribute('class',"mod3__show")
mediaShow.setAttribute('aria-label',"Caroussel des réalisations de ce photographe")
modale3[0].append(mediaShow)
// Affichage des médias dans le caroussel
collection.forEach(media => {
  media.affCarousselM()
  index++
})

// afffichage des boutons autour du média
affBtn(mediaShow.offsetLeft, mediaShow.offsetTop)
// DOM Elements
const carBtn = document.querySelectorAll(".carBtn")
// event listener : click sur l'un des boutons
carBtn.forEach((btn) => btn.addEventListener("click", actionBtn))