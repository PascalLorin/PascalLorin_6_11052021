// lecture des données dans le localStorage
// transforme les données Json en collections d'objets
function readStorageMain() {
  let photographers = JSON.parse(localStorage.getItem('pSet'))
  let medias = JSON.parse(localStorage.getItem('mSet'))
  for (let i of photographers) {
    photographersSet.push(new Photographer(i))
  }
  for (let i of medias) {
    mediaSet.push(new Media(i))
  }
}

// Charge la collection et les tags si retour du caroussel
function readStorageCollection() {
  let medias = JSON.parse(localStorage.getItem('collection'))
  let pTags = JSON.parse(localStorage.getItem('pTags'))
  let pCrit = JSON.parse(localStorage.getItem('pCrit'))
  if (pCrit == undefined) {
    triCrit = 0
  } else {
    triCrit = pCrit
  }
  for (let media of medias) {
    collection.push(new Media(media))
    totalLikes += media.likes
  }
  for (let tag of pTags) {
    tagSetP.push(new Tag(tag.name, tag.state))
  }
}


// sauvegarde data photographe pour caroussel et retour
function writeStorageCollection () {
  removeCollection()
  localStorage.setItem('collection', JSON.stringify(collection))
  localStorage.setItem('pSel', JSON.stringify(pSel))
  localStorage.setItem('pTags', JSON.stringify(tagSetP))
  localStorage.setItem('pCrit', JSON.stringify(triCrit))
}

// Efface les données avant de revenir à la page main
function removeCollection() {
  localStorage.removeItem('collection')
  localStorage.removeItem('pSel')
  localStorage.removeItem('pTags')
  localStorage.removeItem('pCrit')
}