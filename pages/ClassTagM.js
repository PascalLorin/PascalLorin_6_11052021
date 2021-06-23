// classe des tags [tagSetM] et [tagSetP]
// chargement et affichage
class Tag {
  constructor(lib, status) {
    this.name = lib
    this.state = status
  }

  // change state lors d'un click sur button tag
  switchTag() {
    this.state = !this.state
  }
}

// crée le libellé d'affichage du nom du tag
function libTag(name) {
  let str = name.substr(1, name.length)
  let maj = name[0].toUpperCase()
  let lib = "#" + maj + str
  return lib
}

// crée le aria-label suivant 1ère lettre (voyelle ou pas)
function tagAriaLabel(name) {
  let first = name[0]
  let vowel = false
  let lib
  for (let i = 0; i < 6; i++) {
    if (first == vowels[i]) {
      vowel = true
      break
    }
  }
  if (vowel == true) {
    lib = "Sélectionner les photos d'" + name
  } else {
    lib = "Sélectionner les photos de " + name
  }
  return lib
}

// chargement des tags à partir des photographes
function loadTagsM() {
  photographersSet.forEach(p => {
    p.tags.forEach(t => {
      let appendTag = true
      tagSetM.forEach(i => {
        if (t == i.name) {
          appendTag = false
        }
      })
      if (appendTag) {
        tagSetM.push(new Tag(t, false))
      }
    })
  })
}

// affichage des tags dans le <nav>, dans les cards et sur la page photographe
function affTagsM() {
  let tagsContainer = document.getElementById("tags__select")
  tagSetM.forEach(t => {
    let btnTag = document.createElement('button')
    let wtagLib = libTag(t.name)
    let ariaLib = tagAriaLabel(t.name)
    btnTag.setAttribute('id', t.name)
    btnTag.setAttribute('class', "tagNotSelect tagBtnNav")
    btnTag.setAttribute('aria-label', "Catégorie de médias " + ariaLib)
    btnTag.setAttribute('tabindex', 1)
    btnTag.textContent = wtagLib
    tagsContainer.append(btnTag)
  })
}

// détermine si l'on affiche tous les médias du photographe
function setAllMedias(set) {
  allMedias = true
  for (let i = 0; i < set.length; i++) {
    if (set[i].state) {
      allMedias = false
      break
    }
  }
}
