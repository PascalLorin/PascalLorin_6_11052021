// Contructeurs des photographes 
class Photographer {
  constructor(arg) {
    this.name = arg.name
    this.id = arg.id
    this.city = arg.city
    this.country = arg.country
    this.tags = arg.tags
    this.tagline = arg.tagline
    this.price = arg.price
    this.portrait = arg.portrait
  }

  // initialisation des données du photographe sélectionné
  loadTagsP = function () {
    allMedias = true
    this.tags.forEach(t => {
      tagSetP.push(new Tag(t, false))
    })
  }

  // crée le tableau des medias du photographe
  loadCollectionP = function () {
    mediaSet.forEach(media => {
      if (this.id === media.photographerId) {
        collection.push(new Media(media))
      }
    })
  }

  writeStorageCollection = function () {
    localStorage.setItem('collection', JSON.stringify(collection))
    localStorage.setItem('pSel', JSON.stringify(this))
  }

  setRepMedia = function () {
    let firstName = this.name.split(" ")
    photographerDirectory = repMedia + firstName[0] + "/"
  }

  initPhotographerData = function () {
    this.setRepMedia()
    this.loadCollectionP()
    this.writeStorageCollection()
    this.loadTagsP()
  }

  // affiche la modale1 : page du photographe sélectionné
  affModale1 = function () {
    modale1 = document.getElementById('mod1')
    modale1.style.display = "block"
    let article = document.createElement('article')
    article.setAttribute('id', this.id)
    article.setAttribute('class', 'mod1__')
    article.setAttribute('aria-label', "Présentation de " + this.name)
    modale1.append(article)
    let presD = document.createElement('div')
    presD.setAttribute('class', 'mod1__d')
    article.append(presD)
    let presText = document.createElement('div')
    presText.setAttribute('class', 'mod1__d_t')
    presD.append(presText)
    let presP = document.createElement('div')
    presP.setAttribute('class', "mod1__d_p")
    presD.append(presP)
    let nomPhotographe = document.createElement('p')
    nomPhotographe.setAttribute('class', "mod1__d_tname")
    nomPhotographe.setAttribute('aria-label', "Nom du photographe")
    nomPhotographe.textContent = this.name
    presText.append(nomPhotographe)
    let placePhotographe = document.createElement('p')
    placePhotographe.setAttribute('class', "mod1__d_tplace")
    placePhotographe.setAttribute('aria-label', "Localisation du photographe")
    placePhotographe.textContent = this.city + ", " + this.country
    presText.append(placePhotographe)
    let altPhotographe = document.createElement('p')
    altPhotographe.setAttribute('class', "mod1__d_talt")
    altPhotographe.setAttribute('aria-label', "Slogan du photographe")
    altPhotographe.textContent = this.tagline
    presText.append(altPhotographe)
    let presPortrait = document.createElement("img")
    presPortrait.setAttribute('src', "." + repPhotoId + this.portrait)
    presPortrait.setAttribute('alt', "Photo de " + this.name)
    presPortrait.setAttribute('aria-label', "Photo de " + this.name)
    presP.append(presPortrait)
    let tagsPhotographe = document.createElement('nav')
    tagsPhotographe.setAttribute('id', "mod1__tags")
    tagsPhotographe.setAttribute('aria-label', "Catégories du photographe")
    article.append(tagsPhotographe)
    this.tags.forEach(t => {
      let tagPhotographe = document.createElement('button')
      let wtagLib = libTag(t)
      let ariaLib = tagAriaLabel(t)
      tagPhotographe.setAttribute('id', t)
      tagPhotographe.setAttribute('aria-label', ariaLib)
      for (let i = 1; i < tagSetP.length; i++) {
        if (tagSetP[i] != t) {
          if (tagSetP[i].state) {
            tagPhotographe.setAttribute('class', "tagBtnP mod1__tagsx tagSelect")
          } else {
            tagPhotographe.setAttribute('class', "tagBtnP mod1__tagsx tagNotSelect")
          }
        }
        tagPhotographe.textContent = wtagLib
        tagsPhotographe.append(tagPhotographe)
        break
      }
    })
    let btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', "mod1__btn")
    modale1.append(btnDiv)
    let btnForm = document.createElement('button')
    btnForm.textContent = "Contactez-moi"
    btnForm.setAttribute('class', "mod1__btn_form")
    btnForm.setAttribute('aria-label', "Ouvrir le formulaire pour contacter " + this.name)
    btnDiv.append(btnForm)
    affCollectionP()
  }

  // displayPhotographerM : affichage d'un photographe sur la page principale
  displayPhotographerM = function () {
    let cardsContainer = document.getElementById("cards-container")
    let cardPhotographe = document.createElement('a')
    cardPhotographe.setAttribute('target', "_blank")
    cardPhotographe.setAttribute('href', "./pages/photographe.html?id=" + this.id)
    cardPhotographe.setAttribute('id', this.id)
    cardPhotographe.setAttribute('class', "pcard")
    cardPhotographe.setAttribute('alt', "Cliquer pour choisir ce photographe") //, nouvel onglet")
    cardPhotographe.setAttribute('aria-label', "Cliquer pour choisir ce photographe") //, nouvel onglet")
    cardsContainer.append(cardPhotographe)
    let pcardImg = document.createElement("div")
    pcardImg.setAttribute('class', "pcard__img")
    cardPhotographe.append(pcardImg)
    let pcardPortrait = document.createElement("img")
    pcardPortrait.setAttribute('src', repPhotoId + this.portrait)
    pcardPortrait.setAttribute('alt', "Photo de " + this.name)
    pcardPortrait.setAttribute('aria-label', "Photo de " + this.name)
    pcardImg.append(pcardPortrait)
    let nomPhotographe = document.createElement('p')
    nomPhotographe.setAttribute('class', "pcard__name")
    nomPhotographe.setAttribute('aria-label', "Nom du photographe")
    nomPhotographe.textContent = this.name
    cardPhotographe.append(nomPhotographe)
    let placePhotographe = document.createElement('p')
    placePhotographe.setAttribute('class', "pcard__place")
    placePhotographe.setAttribute('aria-label', "Localisation du photographe")
    placePhotographe.textContent = this.city + ", " + this.country
    cardPhotographe.append(placePhotographe)
    let altPhotographe = document.createElement('p')
    altPhotographe.setAttribute('class', "pcard__alt")
    altPhotographe.setAttribute('aria-label', "Slogan du photographe")
    altPhotographe.textContent = this.tagline
    cardPhotographe.append(altPhotographe)
    let pricePhotographe = document.createElement('p')
    pricePhotographe.setAttribute('class', "pcard__price")
    pricePhotographe.setAttribute('aria-label', "Tarif journalier du photographe")
    pricePhotographe.textContent = this.price + " € / jour"
    cardPhotographe.append(pricePhotographe)
    let tagsPhotographe = document.createElement('section')
    tagsPhotographe.setAttribute('class', "pcard__tags")
    tagsPhotographe.setAttribute('aria-label', "Catégories du photographe")
    cardPhotographe.append(tagsPhotographe)
    for (let i = 0; i < this.tags.length; i++) {
      let tagPhotographe = document.createElement('div')
      let wtagLib = libTag(this.tags[i])
      tagPhotographe.setAttribute('class', "pcard__tagsx")
      tagPhotographe.setAttribute('aria-label', "Une des catégories du photographe")
      tagPhotographe.textContent = wtagLib
      tagsPhotographe.append(tagPhotographe)
    }
  }
}

// affiche la modale2 : formulaire de contact du photographe sélectionné
function affModale2() {
  modale2 = document.getElementById('mod2')
  modale2.style.display = "block"
  let form = document.createElement('form')
  form.setAttribute('id', this.id)
  form.setAttribute('class', 'mod1__')
  form.setAttribute('aria-label', "Présentation de " + this.name)
  modale2.append(form)
}

// affiche le média précédant ou le dernier suivant média en cours
function mediaPrev () {
  let x;
}

// affiche le média suivant ou le premier suivant média en cours
function mediaNext () {
  let x;
}

// traitement du bouton cliqué
function actionBtn(event) {
  let selBtn = (event.currentTarget.id)
  switch (selBtn) {
    case "carBtnV":
      mediaPrev()
      break
    case "carBtnN":
      mediaNext()
      break
    case "carBtnC":
      window.close()
  }
}

// afffichage des boutons autour du média
function affBtn(x,y) {
  let h = (viewWidth * proportion2 / 2) - 10
  let fromTop = y + h
  let fromLeft = x - 20
  // bouton "précédant"
  let btnPrev = document.createElement('button')
  btnPrev.setAttribute('class', "carBtn carBtnR ")
  btnPrev.setAttribute('id', "carBtnP")
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
  btnNext.style.top = (y+h) + "px"
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

// affiche la modale3 : caroussel du photographe sélectionné
function affModale3() {
  modale3 = document.getElementById('mod3')
  modale3.style.display = "flex"
  mediaShow = document.createElement('article')
  mediaShow.setAttribute('class', "mod3__show")
  mediaShow.setAttribute('aria-label', "Réalisations de ce photographe")
  modale3.append(mediaShow)
  itemDisplay = document.createElement('div')
  itemDisplay.setAttribute('class', "mod3__showd")
  mediaShow.append(itemDisplay)
  viewWidth = itemDisplay.clientWidth
  // Affichage des médias dans le caroussel
  collection.forEach(media => {
    media.affCarousselM()
  })
  // afffichage des boutons autour du média
  affBtn(itemDisplay.offsetLeft,itemDisplay.offsetTop)
  // DOM Elements
  const carBtn = document.querySelectorAll(".carBtn")
  // event listener : click sur un bouton tag
  carBtn.forEach((btn) => btn.addEventListener("click", actionBtn))
}