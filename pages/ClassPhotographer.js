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

  // array des tagstags
  loadTagsP = function () {
    allMedias = true
    this.tags.forEach(t => {
      tagSetP.push(new Tag(t, false))
    })
  }

  // array des medias du photographe
  loadCollectionP = function () {
    mediaSet.forEach(media => {
      if (this.id === media.photographerId) {
        collection.push(new Media(media))
      }
    })
  }

  // sauvegarde data pour caroussel
  writeStorageCollection = function () {
    localStorage.setItem('collection', JSON.stringify(collection))
    localStorage.setItem('pSel', JSON.stringify(this))
  }

  // construit le nom du répertoire du photographe
  setRepMedia = function () {
    let firstName = this.name.split(" ")
    photographerDirectory = repMedia + firstName[0] + "/"
  }

  
  // initialisation des données du photographe sélectionné
  initPhotographerData = function () {
    this.setRepMedia()
    this.loadCollectionP()
    this.writeStorageCollection()
    this.loadTagsP()
  }

  // affiche la page du photographe sélectionné
  affModale1 = function () {
    let article = document.createElement('article')
    article.setAttribute('id', this.id)
    article.setAttribute('class', 'mod1')
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
    let tagsContainer = document.createElement('div')
    tagsContainer.setAttribute('class', "mod1__tags")
    article.append(tagsContainer)
    let tagsPhotographe = document.createElement('nav')
    tagsPhotographe.setAttribute('id', "tags__select")
    tagsPhotographe.setAttribute('aria-label', "Catégories du photographe")
    tagsContainer.append(tagsPhotographe)
    this.tags.forEach(t => {
      let tagPhotographe = document.createElement('button')
      let wtagLib = libTag(t)
      let ariaLib = tagAriaLabel(t)
      tagPhotographe.setAttribute('id', t)
      tagPhotographe.setAttribute('aria-label', ariaLib)
      for (let i = 1; i < tagSetP.length; i++) {
        if (tagSetP[i] != t) {
          if (tagSetP[i].state) {
            tagPhotographe.setAttribute('class', "tagBtnP tagBtnNav tagSelect")
          } else {
            tagPhotographe.setAttribute('class', "tagBtnP tagBtnNav tagNotSelect")
          }
        }
        tagPhotographe.textContent = wtagLib
        tagsPhotographe.append(tagPhotographe)
        break
      }
    })
    // menu de tri, visible si screen.width > 1199px
    let menuTri = document.createElement('div')
    menuTri.setAttribute('class', "mod1__menuTri")
    menuTri.textContent = "Trier par"
    if (screen.width < 1200) {
      menuTri.style.visibility = "hidden"
    }
    modale1.append(menuTri)
    // le menu de tri apparaît sur menuTri:mouseover
    let menuContainer = document.createElement('modal')
    menuContainer.setAttribute('id', "mod1__menuTri_container")
    menuContainer.setAttribute('class', "mod1__menuTri_container")
    menuContainer.style.display = "none"
    menuTri.append(menuContainer)
    let menuBtn1 = document.createElement('button')
    menuBtn1.setAttribute('id', "mod1__menuTri_b1")
    menuBtn1.setAttribute('class', "mod1__menuTri_btn")
    menuBtn1.textContent = "Popularité"
    menuContainer.append(menuBtn1)
    let menuHr1 = document.createElement('hr')
    menuHr1.setAttribute('class', "mod1__menuTri_hr")
    menuContainer.append(menuHr1)
    let menuBtn2 = document.createElement('button')
    menuBtn2.setAttribute('id', "mod1__menuTri_b2")
    menuBtn2.setAttribute('class', "mod1__menuTri_btn")
    menuBtn2.textContent = "Date"
    menuContainer.append(menuBtn2)
    let menuHr2 = document.createElement('hr')
    menuHr2.setAttribute('class', "mod1__menuTri_hr")
    menuContainer.append(menuHr2)
    let menuBtn3 = document.createElement('button')
    menuBtn3.setAttribute('id', "mod1__menuTri_b3")
    menuBtn3.setAttribute('class', "mod1__menuTri_btn")
    menuBtn3.textContent = "Titre"
    menuContainer.append(menuBtn3)
    // Bouton contactez-moi
    let btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', "mod1__btn")
    modale1.append(btnDiv)
    let btnForm = document.createElement('button')
    btnForm.textContent = "Contactez-moi"
    btnForm.setAttribute('class', "mod1__btn_form")
    btnForm.setAttribute('aria-label', "Cliquez pour ouvrir le formulaire de contact de " + this.name)
    btnDiv.append(btnForm)
    affCollectionP()
  }

  // displayPhotographerM : affichage d'un photographe sur la page principale
  displayPhotographerM = function () {
    let cardsContainer = document.getElementsByClassName("cards-container")
    let cardPhotographe = document.createElement('a')
    cardPhotographe.setAttribute('href', "./pages/photographe.html?id=" + this.id)
    cardPhotographe.setAttribute('id', this.id)
    cardPhotographe.setAttribute('class', "pcard")
    cardPhotographe.setAttribute('alt', "Cliquer pour choisir ce photographe")
    cardPhotographe.setAttribute('aria-label', "Cliquer pour choisir ce photographe")
    cardsContainer[0].append(cardPhotographe)
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