// tri de la collection de media suivant le critère choisi
function triCollection(event) {
  let selBtn = (event.currentTarget.id)
  let menuTri = document.querySelector(".mod1__menuTri_container")
  event.cancelBubble = true
  menuTri.style.display = "none"
  switch (selBtn) {
    case "mod1__menuTri_b1":
      collection.sort(function (a, b) {
        return -(a.likes - b.likes)
      })
      break
    case "mod1__menuTri_b2":
      collection.sort(compareValues('date','decr'))
      break
    case "mod1__menuTri_b3":
      collection.sort(compareValues('title'))
      break
  }
  pSel.writeStorageCollection()
  affCollectionP()
}

function compareValues(key, order = 'incr') {
  return function innerSort(a, b) {
    let comparaison = a[key].localeCompare(b[key])
    if (order === 'decr') {
      return (comparaison * -1)
    } else {
      return comparaison
    }
  }
}