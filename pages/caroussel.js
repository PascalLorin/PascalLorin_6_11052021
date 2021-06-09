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

// initialisation de l'affichage des medias
// supprime les cards affichées (s'il y en a...)
function closeCaroussel() {
  let listCards = document.getElementsByTagName('article')
  listCards[0].parentNode.removeChild(listCards[0])
  modale3.style.display = "none"
  modale1.style.display = "block"
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
    closeCaroussel()
    return
  }
  caroussel = document.getElementsByClassName('mod3c__showdx')
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
readStorageCollection()
const paramMedia = getParams()
pSel.setRepMedia()
}

// affiche la modale3 : caroussel du photographe sélectionné
function affModale3() {
  debugger
  paramMedia = currentTarget.id
  modale1.style.display = "none"
  modale3.style.display = "flex"
  initModale3()
  mediaShow = document.createElement('article')
  mediaShow.setAttribute('class', "mod3c__show")
  mediaShow.setAttribute('aria-label', "Réalisations de ce photographe")
  modale3.append(mediaShow)
  itemDisplay = document.createElement('div')
  itemDisplay.setAttribute('class', "mod3c__showd")
  itemDisplay.setAttribute('id', "caroussel")
  mediaShow.append(itemDisplay)
  viewWidth = itemDisplay.clientWidth
  // Affichage des médias dans le caroussel
  collection.forEach(media => {
    media.affCarousselM()
    index++
  })
  // afffichage des boutons autour du média
  affBtn(itemDisplay.offsetLeft, itemDisplay.offsetTop)
  // DOM Elements
  const carBtn = document.querySelectorAll(".carBtn")
  // event listener : click sur un bouton tag
  carBtn.forEach((btn) => btn.addEventListener("click", actionBtn))
}