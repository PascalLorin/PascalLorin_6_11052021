// caroussel du photographe sélectionné
// l'Id du média qui l'appelle est passée en paramètre pour être affichée en premier
// la collection est passée via localStorage
var collection = []
var currentIndex = 0
var index = 0
var totalLikes = 0
// offset Left, Top & Width du container des médias pour positionner les boutons du caroussel
var x, y, z;

// affiche le média précédant ou le dernier suivant média en cours
function mediaPrev() {
  mediaClear()
  if (currentIndex == 0) {
    currentIndex = collection.length - 1
  } else {
    currentIndex--
  }
  mediaDisplay()
}

// affiche le média suivant ou le premier suivant média en cours
function mediaNext() {
  mediaClear()
  if (currentIndex == (collection.length - 1)) {
    currentIndex = 0
  } else {
    currentIndex++
  }
  mediaDisplay()
}

function mediaClear() {
  caroussel[currentIndex].style.display = "none"
}

function mediaDisplay() {
  caroussel[currentIndex].style.display = "flex"
}

// Traitement de la touche enfoncée
function actionKey(event) {
  event.preventDefault()
  // Escape => page précédente
  switch (event.key) {
    case "Escape":
      history.back()
    case "ArrowLeft":
      mediaPrev()
      break
    case "ArrowRight":
      mediaNext()
      break
  }
}

// traitement du bouton cliqué
function actionBtn(event) {
  let selBtn = event.currentTarget.id
  // clic sur Close => la page précédente
  switch (selBtn) {
    case "carBtnC":
      history.back()
    case "carBtnV":
      mediaPrev()
      break
    case "carBtnN":
      mediaNext()
      break
  }
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
  btnPrevI.setAttribute('tabindex', 1)
  btnPrev.append(btnPrevI)
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
  btnNextI.setAttribute('tabindex', 1)
  btnNext.append(btnNextI)
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
  btnCloseI.setAttribute('tabindex', 1)
  btnClose.append(btnCloseI)
}

function initCaroussel() {
  debugger
  pSel = new Photographer(JSON.parse(localStorage.getItem('pSel')))
  paramMedia = getParams()
  readStorageCollection()
  pSel.setRepMedia()
}

// Script du caroussel
initCaroussel()
let doc = document.getElementById('mod3')
mediaShow = document.createElement('section')
mediaShow.setAttribute('class', "mod3__show")
mediaShow.setAttribute('aria-label', "Caroussel des médias de " + pSel.name)
mediaShow.setAttribute('tabindex', 1)
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
caroussel = document.getElementsByClassName('mod3__showx')
// DOM Elements
const carBtn = document.querySelectorAll(".carBtn")
// event listener : click sur l'un des boutons
carBtn.forEach((btn) => btn.addEventListener('click', actionBtn))
window.addEventListener('keydown', actionKey)