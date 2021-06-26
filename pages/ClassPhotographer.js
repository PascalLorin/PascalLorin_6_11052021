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

  // array des medias du photographe
  // Charge la collection par rapport l'ensemble des médias
  loadCollectionP = function () {
    mediaSet.forEach(media => {
      if (this.id === media.photographerId) {
        collection.push(new Media(media))
        totalLikes += this.likes
      }
    })
  }

  // compte les likes du photographe
  countAllLikes = function () {
    totalLikes = 0
    collection.forEach(media => {
      totalLikes += media.likes
    })
  }

  // construit le nom du répertoire du photographe
  setRepMedia = function () {
    let firstName = this.name.split(" ")
    photographerDirectory = repMedia + firstName[0] + "/"
  }

  // array des tags du photographe
  loadTagsP = function () {
    allMedias = true
    this.tags.forEach(t => {
      tagSetP.push(new Tag(t, false))
    })
  }

  // initialisation des données du photographe sélectionné
  initPhotographerData = function () {
    this.setRepMedia()
    this.loadTagsP()
    this.loadCollectionP()
    this.countAllLikes()
    writeStorageCollection()
  }

  // lecture des données stockées du photographe sélectionné
  loadPhotographerData = function () {
    readStorageCollection()
    this.setRepMedia()
    setAllMedias(tagSetP)
    this.countAllLikes()
  }

  // affiche la page du photographe sélectionné
  affModale1 = function () {
    let article = document.createElement('article')
    article.setAttribute('id', this.id)
    article.setAttribute('class', 'mod1')
    article.setAttribute('aria-label', "Présentation de " + this.name)
    article.setAttribute('tabindex', 1)
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
    tagsPhotographe.setAttribute('tabindex', 1)
    tagsContainer.append(tagsPhotographe)
    tagSetP.forEach(t => {
      let tagPhotographe = document.createElement('button')
      tagPhotographe.setAttribute('id', t.name)
      tagPhotographe.setAttribute('aria-label', "Médias de la catégorie " + t.tagAriaLabel())
      tagPhotographe.setAttribute('tabindex', 2)
      if (t.state) {
        tagPhotographe.setAttribute('class', "tagBtnP tagBtnNav tagSelect")
      } else {
        tagPhotographe.setAttribute('class', "tagBtnP tagBtnNav tagNotSelect")
      }
      tagPhotographe.textContent = t.libTag()
      tagsPhotographe.append(tagPhotographe)
    })
    // menu de tri, visible si screen.width > 1199px
    let menuTri = document.createElement('div')
    menuTri.setAttribute('class', "mod1__menuTri")
    if (screen.width > 1199) {
      menuTri.setAttribute('tabindex', 1)
    } else {
      menuTri.style.visibility = "hidden"
    }
    modale1.append(menuTri)
    if (screen.width > 1199) {
      let menuTriL = document.createElement('div')
      menuTriL.setAttribute('class', "mod1__menuTriL")
      menuTriL.setAttribute('aria-label', "Survoler pour ouvrir le menu de tri des médias du photographe")
      menuTriL.setAttribute('tabindex', 1)
      menuTriL.textContent = "Trier par"
      menuTri.append(menuTriL)
      let menuTriC = document.createElement('div')
      menuTriC.setAttribute('class', "mod1__menuTriC")
      menuTriC.setAttribute('aria-label', "Critère de tri sélectionné")
      menuTriC.setAttribute('tabindex', 1)
      menuTriC.textContent = libCrit[triCrit]
      menuTri.append(menuTriC)
      // le menu de tri apparaît sur menuTri:mouseover
      let menuContainer = document.createElement('modal')
      menuContainer.setAttribute('id', "mod1__menuTri_container")
      menuContainer.setAttribute('class', "mod1__menuTri_container")
      menuContainer.setAttribute('aria-label', "Menu de tri des médias du photographe")
      menuContainer.setAttribute('tabindex', 2)
      menuContainer.style.display = "none"
      menuTri.append(menuContainer)
      let menuBtn1Container = document.createElement('div')
      menuBtn1Container.setAttribute('class', "mod1__menuTri_btn1Cont")
      menuContainer.append(menuBtn1Container)
      let menuBtn1 = document.createElement('button')
      menuBtn1.setAttribute('id', "mod1__menuTri_b1")
      menuBtn1.setAttribute('class', "mod1__menuTri_btn")
      menuBtn1.setAttribute('aria-label', "Trier par popularité décroissante")
      menuBtn1.setAttribute('tabindex', 2)
      menuBtn1.textContent = "Popularité"
      menuBtn1Container.append(menuBtn1)
      let menuBtn1Icone = document.createElement('icon')
      menuBtn1Icone.setAttribute('class', "fa fa-chevron-up mod1__menuTri_btn1ContIcon")
      menuBtn1Icone.setAttribute('aria-label', "Fermer le menu de tri")
      menuBtn1Icone.setAttribute('tabindex', 2)
      menuBtn1Container.append(menuBtn1Icone)
      let menuHr1 = document.createElement('hr')
      menuHr1.setAttribute('class', "mod1__menuTri_hr")
      menuContainer.append(menuHr1)
      let menuBtn2 = document.createElement('button')
      menuBtn2.setAttribute('id', "mod1__menuTri_b2")
      menuBtn2.setAttribute('class', "mod1__menuTri_btn")
      menuBtn2.setAttribute('aria-label', "Trier par date décroissante")
      menuBtn2.setAttribute('tabindex', 2)
      menuBtn2.textContent = "Date"
      menuContainer.append(menuBtn2)
      let menuHr2 = document.createElement('hr')
      menuHr2.setAttribute('class', "mod1__menuTri_hr")
      menuContainer.append(menuHr2)
      let menuBtn3 = document.createElement('button')
      menuBtn3.setAttribute('id', "mod1__menuTri_b3")
      menuBtn3.setAttribute('class', "mod1__menuTri_btn")
      menuBtn3.setAttribute('aria-label', "Trier par titre dans l'ordre alphabétique")
      menuBtn3.setAttribute('tabindex', 2)
      menuBtn3.textContent = "Titre"
      menuContainer.append(menuBtn3)
    }
    // Encart total likes et tarif journalier
    if (screen.width > 1199) {
      let mod1Aside = document.createElement('aside')
      mod1Aside.setAttribute('class', "mod1__aside")
      mod1Aside.setAttribute('tabindex', 1)
      modale1.append(mod1Aside)
      let mod1AsideLikes = document.createElement('div')
      mod1AsideLikes.setAttribute('class', "mod1__aside_likes")
      mod1Aside.append(mod1AsideLikes)
      let mod1AsideLikesN = document.createElement('div')
      mod1AsideLikesN.setAttribute('class', "mod1__aside_likesN")
      mod1AsideLikesN.textContent = totalLikes
      mod1AsideLikes.append(mod1AsideLikesN)
      let mod1AsideLikesIcon = document.createElement('icon')
      mod1AsideLikesIcon.setAttribute('class', "fa fa-heart mod1__aside_likesIcon")
      mod1AsideLikes.append(mod1AsideLikesIcon)
      let mod1AsideTarif = document.createElement('div')
      mod1AsideTarif.setAttribute('class', "mod1__aside_tarif")
      mod1Aside.append(mod1AsideTarif)
      mod1AsideTarif.textContent = this.price + " € / jour"
      mod1Aside.append(mod1AsideTarif)
    }
    // Bouton contactez-moi
    let btnDiv = document.createElement('div')
    btnDiv.setAttribute('class', "mod1__btn")
    modale1.append(btnDiv)
    let btnForm = document.createElement('button')
    btnForm.textContent = "Contactez-moi"
    btnForm.setAttribute('class', "mod1__btn_form")
    btnForm.setAttribute('aria-label', "Cliquez pour ouvrir le formulaire de contact de " + this.name)
    btnForm.setAttribute('tabindex', 1)
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
    cardPhotographe.setAttribute('aria-label', "Cliquer pour choisir " + this.id)
    cardPhotographe.setAttribute('tabindex', 1)
    cardsContainer[0].append(cardPhotographe)
    let pcardImg = document.createElement("div")
    pcardImg.setAttribute('class', "pcard__img")
    cardPhotographe.append(pcardImg)
    let pcardPortrait = document.createElement("img")
    pcardPortrait.setAttribute('src', repPhotoId + this.portrait)
    pcardPortrait.setAttribute('alt', "Photo de " + this.name)
    pcardPortrait.setAttribute('aria-label', "Photo de " + this.name)
    pcardPortrait.setAttribute('tabindex', 2)
    pcardImg.append(pcardPortrait)
    let nomPhotographe = document.createElement('p')
    nomPhotographe.setAttribute('class', "pcard__name")
    nomPhotographe.setAttribute('aria-label', "Nom du photographe")
    nomPhotographe.setAttribute('tabindex', 2)
    nomPhotographe.textContent = this.name
    cardPhotographe.append(nomPhotographe)
    let placePhotographe = document.createElement('p')
    placePhotographe.setAttribute('class', "pcard__place")
    placePhotographe.setAttribute('aria-label', "Localisation du photographe")
    placePhotographe.setAttribute('tabindex', 2)
    placePhotographe.textContent = this.city + ", " + this.country
    cardPhotographe.append(placePhotographe)
    let altPhotographe = document.createElement('p')
    altPhotographe.setAttribute('class', "pcard__alt")
    altPhotographe.setAttribute('aria-label', "Slogan du photographe")
    altPhotographe.setAttribute('tabindex', 2)
    altPhotographe.textContent = this.tagline
    cardPhotographe.append(altPhotographe)
    let pricePhotographe = document.createElement('p')
    pricePhotographe.setAttribute('class', "pcard__price")
    pricePhotographe.setAttribute('aria-label', "Tarif journalier du photographe")
    pricePhotographe.setAttribute('tabindex', 2)
    pricePhotographe.textContent = this.price + " € / jour"
    cardPhotographe.append(pricePhotographe)
    let tagsPhotographe = document.createElement('section')
    tagsPhotographe.setAttribute('class', "pcard__tags")
    tagsPhotographe.setAttribute('aria-label', "Catégories du photographe")
    tagsPhotographe.setAttribute('tabindex', 2)
    cardPhotographe.append(tagsPhotographe)
    for (let i = 0; i < this.tags.length; i++) {
      let wtag = new Tag(this.tags[i], false)
      let tagPhotographe = document.createElement('div')
      tagPhotographe.setAttribute('class', "pcard__tagsx")
      tagPhotographe.setAttribute('aria-label', "Une des catégories du photographe")
      tagPhotographe.setAttribute('tabindex', 3)
      tagPhotographe.textContent = wtag.libTag()
      tagsPhotographe.append(tagPhotographe)
    }
  }
}