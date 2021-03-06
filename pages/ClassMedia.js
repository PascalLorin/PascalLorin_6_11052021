// Contructeurs des médias
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
    let carousselLink = document.createElement('a')
    carousselLink.setAttribute('href', "./caroussel.html?id=" + this.id)
    carousselLink.setAttribute('alt', "Cliquer pour afficher le caroussel de ce photographe")
    carousselLink.setAttribute('aria-label', "Cliquer pour afficher le caroussel de ce photographe")
    carousselLink.setAttribute('tabindex', 2)
    card.append(carousselLink)
    let viewData = new factory(this)
    let view = viewData.getEl()
    view.setAttribute('class', "mod1__showxv")
    carousselLink.append(view)
    viewWidth = view.clientWidth
    if (screen.width > 1199) {
      view.setAttribute('height', viewWidth * proportion2)
    } else {
      view.setAttribute('height', viewWidth * proportion1)
    }
    let infos = document.createElement('div')
    infos.setAttribute('class', "mod1__showxd")
    card.append(infos)
    let title = document.createElement('div')
    title.setAttribute('class', "mod1__showxdt")
    title.setAttribute('aria-label', this.title)
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
    iconLikei.setAttribute('tabindex', 3)
    likes.append(iconLikei)
  }

  // affiche un média du caroussel du photographe
  affCarousselM() {
    let card = document.createElement('p')
    card.setAttribute('class', "mod3__showx")
    mediaShow.append(card)
    if (this.id == paramMedia) {
      card.style.display = "flex"
      currentIndex = index
    } else {
      card.style.display = "none"
    }
    let viewData = new factory(this)
    var view = viewData.getEl()
    view.setAttribute('class', "mod3__showxv")
    view.setAttribute('tabindex', 2)
    view.setAttribute('width', viewWidth)
    if (viewWidth == 950) {
      view.setAttribute('height', viewWidth * proportion3)
    } else {
      view.setAttribute('height', viewWidth * proportion2)
    }
    card.append(view)
    let title = document.createElement('div')
    title.setAttribute('class', "mod3__showxt")
    title.setAttribute('width', viewWidth)
    title.textContent = this.title
    card.append(title)
    if (card.style.display === "flex") {
      x = view.offsetLeft
      y = view.offsetTop
      z = view.offsetWidth
    }
  }
}
// affiche la collection des medias du photographe suivant les tags sélectionnés
function affCollectionP() {
  effaceMedias()
  mediaShow = document.createElement('section')
  mediaShow.setAttribute('class', "mod1__show")
  mediaShow.setAttribute('aria-label', "Réalisations de ce photographe")
  mediaShow.setAttribute('tabindex', 1)
  modale1.append(mediaShow)
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
  // après l'affichage, écoute des icones "Like" pour incrémenter leur nombre
  const iconLikes = document.querySelectorAll("i")
  iconLikes.forEach((item) => item.addEventListener("click", incrLikes))
}

// initialisation de l'affichage des medias
// supprime les cards affichées (s'il y en a)
function effaceMedias() {
  let listCards = document.getElementsByTagName('section')
  if (listCards.length > 0) {
    listCards[0].parentNode.removeChild(listCards[0])
  }
}