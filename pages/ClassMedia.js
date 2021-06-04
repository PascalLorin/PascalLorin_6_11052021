// Contructeurs des media 
class Media {
  constructor(arg) {
    this.id = arg.id
    this.photographerId = arg.photographerId
    this.title = arg.title
    this.image = arg.image
    this.video = arg.video
    this.tags = arg.tags
    this.likes = arg.likes
    this.date = arg.date
    this.price = arg.price
  }

  // affiche un media du photographe sur sa page
  affCollectionPM() {
    let card = document.createElement('p')
    card.setAttribute('class', "mod1__showx")
    mediaShow.append(card)
    viewWidth = mediaShow.clientWidth
    let carousselLink = document.createElement('a')
    carousselLink.setAttribute('target', "_blank")
    carousselLink.setAttribute('href', "./caroussel.html?id=" + this.id)
    carousselLink.setAttribute('alt', "Cliquer pour afficher le caroussel de ce photographe, nouvel onglet")
    carousselLink.setAttribute('aria-label', "Cliquer pour afficher le caroussel de ce photographe, nouvel onglet")
    card.append(carousselLink)
    let viewData = new factory(this)
    let view = viewData.getEl()
    view.setAttribute('class', "mod1__showxv")
    view.setAttribute('height', viewWidth * proportion1)
    view.setAttribute('aria-label', this.title)
    view.setAttribute('alt', this.title)
    carousselLink.append(view)
    let infos = document.createElement('div')
    infos.setAttribute('class', "mod1__showxd")
    card.append(infos)
    let title = document.createElement('div')
    title.setAttribute('class', "mod1__showxdt")
    title.setAttribute('aria-label', this.title)
    title.setAttribute('alt', this.title)
    title.textContent = this.title
    infos.append(title)
    let likes = document.createElement('div')
    likes.setAttribute('class', "mod1__showxdl")
    infos.append(likes)
    let nbLikes = document.createElement('div')
    nbLikes.setAttribute('class', "mod1__showxdln")
    nbLikes.setAttribute('aria-label', "Nombre de \"j'aime\"")
    nbLikes.textContent = this.likes
    likes.append(nbLikes)
    let iconLikei = document.createElement('i')
    iconLikei.setAttribute('class', "fas fa-heart")
    iconLikei.setAttribute('id', this.id)
    likes.append(iconLikei)
  }

  // affiche un média du caroussel du photographe
  affCarousselM() {
    var card = document.createElement('section')
    card.setAttribute('class', "mod3__showdx")
    if (this.id == paramMedia) {
      card.style.display = "flex"
    } else {
      card.style.display = "none"
    }
    itemDisplay.append(card)
    let viewData = new factory(this)
    var view = viewData.getEl()
    view.setAttribute('class', "mod3__showdxv")
    view.setAttribute('height', viewWidth * proportion2)
    view.setAttribute('aria-label', this.title)
    view.setAttribute('alt', this.title)
    card.append(view)
    let title = document.createElement('div')
    title.setAttribute('class', "mod3__showdxt")
    title.setAttribute('aria-label', this.title)
    title.setAttribute('alt', this.title)
    title.textContent = this.title
    card.append(title)
  }
}

// affiche la collection des medias du photographe suivant les tags sélectionnés
function affCollectionP() {
  effaceMedias()
  mediaShow = document.createElement('section')
  mediaShow.setAttribute('class', "mod1__show")
  mediaShow.setAttribute('aria-label', "Réalisations de ce photographe")
  modale1.append(mediaShow)
  viewWidth = mediaShow.clientWidth
  collection.forEach(media => {
    if (allMedias) {
      media.affCollectionPM()
    } else {
      tagSetP.forEach(t => {
        if ((media.tags == t.name) && (t.state)) {
          media.affCollectionPM()
        }
      })
    }
  })
  // Après l'affichage au chargement, on utilise les l'état des tags pour l'affichage de la collection
  allMedias = false
  const iconLikes = document.querySelectorAll("i")
  iconLikes.forEach((item) => item.addEventListener("click", incrLikes))
}

// détermine si l'on affiche tous les médias du photographe
function setAllMedias() {
  allMedias = true
  for (let i = 0; i < tagSetP.length; i++) {
    if (tagSetP[i].state) {
      allMedias = false
      break
    }
  }
}

// initialisation de l'affichage des medias
// supprime les cards affichées (s'il y en a...)
function effaceMedias() {
  let listCards = document.getElementsByTagName('section')
  if (listCards.length > 0) {
    listCards[0].parentNode.removeChild(listCards[0])
  }
}