// lecture des données dans le localStorage
// transforme les données Json en collections d'objets
function readStorage() {
  let photographers = JSON.parse(localStorage.getItem('pSet'))
  for (let i of photographers) {
    photographersSet.push(new Photographer(i))
  }
  let medias = JSON.parse(localStorage.getItem('mSet'))
  for (let i of medias) {
    mediaSet.push(new Media(i))
  }
}
