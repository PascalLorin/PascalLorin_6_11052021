// caroussel du photographe sélectionné
// l'Id du média qui l'appelle est passée en paramètre pour être affichée en premier
// la collection est passée via localStorage
var collection = [];

function readStorageCollection() {
  pSel = new Photographer(JSON.parse(localStorage.getItem('pSel')))
  let medias = JSON.parse(localStorage.getItem('collection'))
  for (let media of medias) {
    collection.push(new Media(media))
  }
}
readStorageCollection()
const paramMedia = getParams()
pSel.setRepMedia()
affModale3()