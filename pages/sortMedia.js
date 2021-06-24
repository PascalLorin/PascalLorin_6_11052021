// tri de la collection de media suivant le critère choisi
function triCollection(event) {
  let selBtn = (event.currentTarget.id)
  let menuTri = document.querySelector(".mod1__menuTri_container")
  let menuTriC = document.querySelector(".mod1__menuTriC")
  menuTri.style.display = "none"
  event.cancelBubble = true
  switch (selBtn) {
    case "mod1__menuTri_b1":
      triCrit = 1
      collection.sort(function (a, b) {
        return -(a.likes - b.likes)
      })
      break
    case "mod1__menuTri_b2":
      triCrit = 2
      collection.sort(compareValues('date', 'decr'))
      break
    case "mod1__menuTri_b3":
      triCrit = 3
      collection.sort(compareValues('title'))
      break
  }
  writeStorageCollection()
  menuTriC.textContent = libCrit[triCrit]
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
